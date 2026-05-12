export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "ANTHROPIC_API_KEY not configured" });

  const { input, fase = "6-8" } = req.body || {};
  if (!input) return res.status(400).json({ error: "input is required" });

  let context = input;
  const isUrl = /^https?:\/\//i.test(input.trim());

  if (isUrl) {
    try {
      const response = await fetch(input, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; PapazzBot/1.0)" },
        signal: AbortSignal.timeout(8000),
      });
      const html = await response.text();
      context = html
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .substring(0, 6000);
    } catch {
      return res.status(400).json({ error: "Não foi possível acessar a URL. Verifique o endereço." });
    }
  }

  const TIPOS = [
    "Refeições Principais", "Sopas e Caldos", "Lanches", "Bebidas", "Sobremesas",
    "Lancheira Escolar", "Receitas de 15 Minutos", "Menu Disfarce", "Festinhas Saudáveis", "Ideias Extras",
  ];

  const prompt = `Você é nutricionista especialista em alimentação infantil. Com base no conteúdo abaixo, ${isUrl ? "extraia e adapte" : "crie"} uma receita para bebês/crianças na fase ${fase} meses, adequada para o app Papazz.

${isUrl ? "CONTEÚDO DA PÁGINA:" : "TEMA SOLICITADO:"}
${context}

RETORNE APENAS um JSON válido (sem markdown, sem explicações) com exatamente esta estrutura:
{
  "nome": "Nome da receita (max 60 chars)",
  "tipo": "uma das opções: ${TIPOS.join(" | ")}",
  "fase": "${fase}",
  "tempo": 20,
  "dificuldade": "Fácil",
  "premium": false,
  "ingredientes": ["ingrediente 1 com quantidade", "ingrediente 2"],
  "preparo": "Passo a passo detalhado em um único parágrafo. Mencione temperaturas, texturas adequadas para a idade, e dicas de segurança.",
  "dicas": "Benefícios nutricionais e dicas para os pais.",
  "tags": ["tag1", "tag2", "tag3"],
  "restricoes": [],
  "nutrientes": {
    "calorias": 0,
    "proteina": 0,
    "carboidratos": 0,
    "gordura": 0,
    "ferro": 0,
    "calcio": 0
  }
}

Regras:
- restricoes pode conter: "Sem Glúten", "Sem Lactose", "Sem Ovo" (apenas se aplicável)
- dificuldade: "Fácil", "Médio" ou "Difícil"
- tempo em minutos (número inteiro)
- nutrientes em números (kcal/g/mg por porção)
- sem sal e sem açúcar para bebês abaixo de 12 meses
- adapte texturas e tamanhos de alimentos para a fase indicada`;

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
        max_tokens: 2048,
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
    if (!jsonMatch) return res.status(500).json({ error: "Claude não retornou JSON válido" });

    const recipe = JSON.parse(jsonMatch[0]);
    return res.status(200).json(recipe);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
