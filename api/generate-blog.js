export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "ANTHROPIC_API_KEY not configured" });
  }

  const { title, keywords, category, description } = req.body || {};
  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }

  const keywordList = keywords || "";
  const cat = category || "Guias";
  const currentYear = new Date().getFullYear();

  const prompt = `Você é um especialista em SEO e nutrição infantil. Escreva um artigo completo e otimizado para SEO sobre o tema abaixo para o blog do Papazz, uma plataforma brasileira de introdução alimentar para bebês.

TEMA: ${title}
CATEGORIA: ${cat}
PALAVRAS-CHAVE ALVO: ${keywordList}
${description ? `META DESCRIPTION SUGERIDA: ${description}` : ""}

INSTRUÇÕES SEO OBRIGATÓRIAS:
- Artigo em português brasileiro, tom acolhedor e especialista
- Mínimo de 1.500 palavras
- Estrutura: H2 para seções principais, H3 para subseções
- Inclua a palavra-chave principal no primeiro parágrafo, nos H2 e distribuída naturalmente no texto
- Use listas com bullets para facilitar leitura (Google adora)
- Inclua pelo menos 2 perguntas frequentes como seção "Perguntas Frequentes" no final (formato H3 + resposta)
- Inclua dados e estatísticas quando relevante (OMS, SBP, Ministério da Saúde)
- Escreva parágrafos curtos (máx 3-4 linhas) para melhor leitura mobile
- Use negrito (**texto**) para destacar informações importantes
- Ao final inclua uma seção "## Conclusão" com CTA suave para explorar o Papazz
- Não inclua o H1 (o título já está no template do site)
- Ano atual: ${currentYear}

FORMATO DE SAÍDA:
Retorne APENAS o conteúdo Markdown do artigo, sem introdução, sem explicações, sem o H1 com o título principal. Comece direto com o primeiro parágrafo ou com um H2.`;

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
    const content = data.content?.[0]?.text || "";

    // Gera meta description automática se não foi fornecida
    let autoDescription = description;
    if (!autoDescription && content) {
      const firstParagraph = content
        .replace(/^#+.+\n/gm, "")
        .replace(/\*\*/g, "")
        .split("\n")
        .find((l) => l.trim().length > 40);
      autoDescription = firstParagraph?.trim().substring(0, 157) + "...";
    }

    return res.status(200).json({ content, description: autoDescription });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
