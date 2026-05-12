export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "ANTHROPIC_API_KEY not configured" });

  const { title, keywords, category, description, sourceUrl, topic } = req.body || {};

  const isUrl = sourceUrl && /^https?:\/\//i.test(sourceUrl.trim());
  let sourceContext = "";

  if (isUrl) {
    try {
      const response = await fetch(sourceUrl, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; PapazzBot/1.0)" },
        signal: AbortSignal.timeout(8000),
      });
      const html = await response.text();
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

  const prompt = `Você é especialista em SEO, GEO (Generative Engine Optimization) e nutrição infantil. Escreva um artigo de blog de alta qualidade para o Papazz, plataforma brasileira de introdução alimentar para bebês.

TEMA/TÍTULO SOLICITADO: ${inputTopic}
PALAVRAS-CHAVE: ${keywords || "introdução alimentar, bebê, receitas saudáveis"}
CATEGORIA: ${category || "Guias"}
${sourceContext ? `\nCONTEXTO DE REFERÊNCIA:\n${sourceContext}\n` : ""}

REGRAS OBRIGATÓRIAS DE SEO/GEO:
1. Título H1 com a palavra-chave principal — máximo 70 caracteres
2. Pelo menos um H2 com a palavra-chave
3. Meta description contendo a palavra-chave — máximo 140 caracteres
4. Slug contendo a palavra-chave — máximo 70 caracteres, apenas letras minúsculas e hifens
5. Palavra-chave no primeiro parágrafo do texto
6. Hierarquia de títulos: H2 para seções principais, H3 para subseções
7. Incluir 1 link interno fictício para outro post do Papazz (use formato [texto](/blog/slug-exemplo))
8. Incluir 1 link externo para fonte confiável (OMS, SBP, Ministério da Saúde)
9. Sem travessões (—) ou traços (–) no texto
10. Sem emojis em nenhuma parte do texto
11. Parágrafos curtos, máximo 3 linhas
12. Tom natural, acolhedor e amigável para mães brasileiras
13. Mínimo 1.200 palavras
14. Incluir seção "Perguntas Frequentes" com 3 perguntas H3 e respostas
15. Não incluir H1 no corpo (o título já aparece no template)
16. Ano atual: ${currentYear}
17. Categoria mais adequada entre: ${CATEGORIAS.join(", ")}

RETORNE APENAS um JSON válido (sem markdown, sem explicações) com esta estrutura:
{
  "title": "Título H1 com keyword (max 70 chars)",
  "slug": "slug-com-keyword-max-70-chars",
  "description": "Meta description com keyword (max 140 chars)",
  "category": "categoria adequada",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4"],
  "content": "Conteúdo completo em Markdown (sem o H1, começar com parágrafo ou H2)"
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
        max_tokens: 4096,
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
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
