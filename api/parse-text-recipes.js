export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "ANTHROPIC_API_KEY not configured" });

  const { text, fase = "6-8" } = req.body || {};
  if (!text?.trim()) return res.status(400).json({ error: "text is required" });

  const TIPOS = [
    "Refeições Principais", "Sopas e Caldos", "Lanches", "Bebidas", "Sobremesas",
    "Lancheira Escolar", "Menu Disfarce", "Festinhas Saudáveis",
  ];

  const prompt = `Você é nutricionista especialista em alimentação infantil. Analise o texto abaixo e extraia TODAS as receitas presentes, adaptando-as para bebês/crianças na fase ${fase} meses.

TEXTO:
${text.substring(0, 12000)}

RETORNE APENAS um JSON válido (sem markdown, sem explicações) no formato:
{
  "receitas": [
    {
      "nome": "Nome da receita (max 60 chars)",
      "tipo": "uma das opções: ${TIPOS.join(" | ")}",
      "fase": "${fase}",
      "tempo": 20,
      "dificuldade": "Fácil",
      "premium": false,
      "ingredientes": ["ingrediente 1 com quantidade", "ingrediente 2"],
      "preparo": "Passo a passo detalhado em um parágrafo.",
      "dicas": "Benefícios nutricionais e dicas para os pais.",
      "tags": ["tag1", "tag2"],
      "restricoes": [],
      "nutrientes": { "calorias": 0, "proteina": 0, "carboidratos": 0, "gordura": 0, "ferro": 0, "calcio": 0 }
    }
  ]
}

Regras:
- Extraia TODAS as receitas presentes no texto, sem excecao
- restricoes pode conter: "Sem Glúten", "Sem Lactose", "Sem Ovo" (apenas se aplicavel)
- dificuldade: "Fácil", "Médio" ou "Difícil"
- tempo em minutos (numero inteiro)
- nutrientes em numeros (kcal/g/mg por porcao) — estime se nao informado
- sem sal e sem acucar para bebes abaixo de 12 meses
- adapte texturas para a fase indicada`;

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
        max_tokens: 8192,
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
    if (!jsonMatch) return res.status(500).json({ error: "Claude nao retornou JSON valido" });

    const parsed = JSON.parse(jsonMatch[0]);
    if (!Array.isArray(parsed.receitas)) return res.status(500).json({ error: "Nenhuma receita encontrada no texto" });

    return res.status(200).json({ receitas: parsed.receitas });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
