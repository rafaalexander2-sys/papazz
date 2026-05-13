export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "ANTHROPIC_API_KEY not configured" });

  const { title, keywords, category, sourceUrl, topic } = req.body || {};

  const isUrl = sourceUrl && /^https?:\/\//i.test(sourceUrl.trim());
  let sourceContext = "";
  let extractedImage = "";
  let extractedImage2 = "";

  if (isUrl) {
    try {
      const response = await fetch(sourceUrl, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; PapazzBot/1.0)" },
        signal: AbortSignal.timeout(8000),
      });
      const html = await response.text();

      // Capa: og:image ou twitter:image
      const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1]
        || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)?.[1]
        || html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)?.[1]
        || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i)?.[1];

      if (ogImage) {
        try { extractedImage = new URL(ogImage, sourceUrl).href; } catch { extractedImage = ogImage.startsWith("http") ? ogImage : ""; }
      }

      // Imagem de conteúdo: segunda imagem grande no body (ignora ícones e logos pequenos)
      const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
      const contentImgs = imgMatches
        .map((m) => {
          const src = m[1];
          const tag = m[0];
          // Ignora SVG, base64, ícones e imagens com dimensões pequenas declaradas
          if (src.includes("data:") || src.endsWith(".svg")) return null;
          const wMatch = tag.match(/width=["']?(\d+)/i);
          const w = wMatch ? parseInt(wMatch[1]) : 999;
          if (w < 200) return null;
          return src;
        })
        .filter(Boolean);

      // Pula a primeira (provavelmente logo/header) e pega a segunda imagem grande
      const secondImg = contentImgs.find((src) => src !== ogImage && !src.includes("logo") && !src.includes("icon") && !src.includes("avatar"));
      if (secondImg) {
        try { extractedImage2 = new URL(secondImg, sourceUrl).href; } catch { extractedImage2 = secondImg.startsWith("http") ? secondImg : ""; }
      }

      sourceContext = html
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .substring(0, 5000);
    } catch {
      sourceContext = "";
    }
  }

  const inputTopic = title || topic || sourceUrl || "";
  if (!inputTopic) return res.status(400).json({ error: "title, topic ou sourceUrl é obrigatório" });

  const currentYear = new Date().getFullYear();
  const CATEGORIAS = ["Guias", "Nutrição", "BLW", "Dicas", "Receitas", "Desenvolvimento", "Saúde"];

  const prompt = `Você é redator sênior de SEO e GEO especializado em nutrição infantil e introdução alimentar. Escreve artigos que ranqueiam no Google Brasil, aparecem nos AI Overviews e são citados por ChatGPT, Perplexity e Gemini. Escreve para o Papazz, plataforma brasileira de introdução alimentar para bebês.

REGRA ABSOLUTA: Só use fatos verificáveis sobre nutrição infantil, diretrizes da OMS e SBP. Jamais invente estudos, nomes de especialistas ou dados não confirmados.

TEMA SOLICITADO: ${inputTopic}
PALAVRAS-CHAVE SUGERIDAS: ${keywords || "introdução alimentar, bebê, nutrição infantil"}
CATEGORIA: ${category || "Guias"}
${sourceContext ? `\nCONTEXTO DE REFERÊNCIA (use só o que for factual):\n${sourceContext}\n` : ""}

─── METADADOS ───
TÍTULO: máx 60 chars. Sem traço, travessão ou hífen como pontuação. Use dois pontos se precisar separar. Palavra-chave principal na 1ª posição.
SLUG: máx 30 chars. 3 a 4 palavras, lowercase sem acento, sem artigos (o,a,de,da,do,para,com).
META DESCRIPTION: máx 150 chars. Palavra-chave + gancho de curiosidade ou dado concreto.
CATEGORIA: escolha a mais adequada entre: ${CATEGORIAS.join(", ")}.
KEYWORDS: array de 4 a 6 termos que mães brasileiras realmente buscam.

─── ESTRUTURA DO ARTIGO ───
Escolha o formato mais adequado ao tema:
- Guia Completo: passo a passo de uma fase ou técnica (BLW, papinha, desmame)
- Dúvida Respondida: responde uma pergunta real de mãe ("bebê recusa comida o que fazer")
- Lista de Receitas: X opções para Y meses com orientações
- Comparativo: BLW vs papinha, purê vs pedaço, amamentação vs fórmula
- Alimento Específico: "pode dar X para bebê?" com idade, quantidade e preparo

─── REGRAS DE CONTEÚDO ───
§ 1 (OBRIGATÓRIO): Responde a pergunta principal de forma COMPLETA e AUTOCONTIDA. Palavra-chave na 1ª frase. Mínimo 1 dado numérico concreto (idade em meses, quantidade em gramas, percentual de estudo). Este parágrafo deve funcionar sozinho quando citado por uma IA.

§ 2: Contextualiza para quem está começando do zero. Explica o "porquê" por trás da resposta.

H2 PRINCIPAL (3+ parágrafos densos): Aprofunda o tema central. Pelo menos uma frase no formato "X é Y porque Z". Cite OMS ou SBP quando relevante.

H2 SECUNDÁRIO: Responde a 2ª dúvida mais buscada sobre o tema.

H2 EXTRA: Curiosidade prática, erro comum que mães cometem, ou contexto científico acessível.

H2 FINAL "Vale a pena tentar?": Opinião editorial honesta + link interno para o Papazz. Máx 2 parágrafos.

H3 FAQ (3 perguntas): Perguntas reais que mães digitam no Google. Respostas diretas de 2 a 3 frases.

─── E-E-A-T ───
EXPERIÊNCIA: Escreva como quem passou pela introdução alimentar. Detalhes concretos de cenas do cotidiano ("quando o bebê empurra o prato", "aquela cara de nojo na primeira vez").
EXPERTISE: Contextualize com diretrizes oficiais. Compare técnicas. Explique o mecanismo por trás da recomendação.
AUTORIDADE: Use dados reais de órgãos reconhecidos (OMS, SBP, Ministério da Saúde). Se não tiver dado concreto, não invente.
CONFIANÇA: Seja honesto sobre variações individuais. "Cada bebê é diferente" quando for verdade, mas sem usar essa frase genérica.

─── GEO ───
§ 1 completo e autocontido para ser citado por IA.
Pelo menos 1 frase "X é Y porque Z" em cada H2.
Pelo menos 2 dados numéricos concretos no artigo inteiro.
H2s formulados como perguntas ou afirmações claras e diretas.
Cada seção deve fazer sentido lida isolada.

─── VOZ E TOM ───
Português brasileiro coloquial e articulado. Tom de amiga nutricionista que também é mãe.
Opinião editorial em pelo menos 2 momentos do texto.
1 comparação com situação cotidiana que toda mãe reconhece.
Parágrafos de no máximo 3 linhas. Sem listas com bullets. Parágrafos corridos.
Mínimo 1000 palavras, máximo 1400 palavras.

PROIBIDO usar: incrível, impactante, surpreendente, fascinante, mergulhar, explorar, imersivo, visceral, magistral, jornada, transformador, poderoso, essencial, fundamental, crucial, vital.
PROIBIDO iniciar frases com: "É importante", "Vale ressaltar", "Em suma", "Portanto", "Nesse sentido".
PROIBIDO: traços, travessões ou hifens como pontuação. Use vírgula ou ponto e vírgula.
PROIBIDO: H1 no corpo do artigo (o título já aparece no template do Papazz).
PROIBIDO: emojis em qualquer parte do texto.

─── LINKS ───
Obrigatório 2 links externos para fontes confiáveis. Use fontes reais:
- OMS: https://www.who.int/health-topics/complementary-feeding
- SBP: https://www.sbp.com.br/departamentos-cientificos/dc-nutrologia/documentos-cientificos/
- Ministério da Saúde: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/publicacoes/guia-alimentar-para-criancas-brasileiras-menores-de-2-anos
Formato Markdown: [texto do link](URL)

Obrigatório 1 link interno para outro conteúdo do Papazz. Use formato Markdown com caminho relativo: [texto](/receitas) ou [texto](/cronograma) ou [texto](/blog/slug-relacionado). Escolha o mais relevante ao tema.

─── ANO E ATUALIDADE ───
Ano atual: ${currentYear}. Se mencionar tendências ou recomendações, use "em ${currentYear}".

─── OUTPUT ───
Retorne APENAS um JSON válido, sem markdown, sem texto antes ou depois, sem blocos de código. Estrutura obrigatória:
{
  "title": "Título com keyword (max 60 chars, sem travessão)",
  "slug": "slug-3-4-palavras-sem-acento",
  "description": "Meta description com keyword e gancho (max 150 chars)",
  "category": "categoria adequada",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4"],
  "content": "Conteúdo completo em Markdown. Sem H1. Começa com parágrafo direto ou H2. Links em formato Markdown."
}`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 6000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: `Claude API error: ${err}` });
    }

    const data = await response.json();
    const raw = data.content?.[0]?.text || "";

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return res.status(500).json({ error: "Resposta inválida do Claude" });

    const result = JSON.parse(jsonMatch[0]);
    if (extractedImage) result.imageUrl = extractedImage;
    if (extractedImage2) result.imageUrl2 = extractedImage2;
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
