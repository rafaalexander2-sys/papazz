export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "ANTHROPIC_API_KEY not configured" });

  const { pdfBase64, fileName, fase = "6-8" } = req.body || {};
  if (!pdfBase64) return res.status(400).json({ error: "pdfBase64 is required" });

  const TIPOS = [
    "Refeições Principais", "Sopas e Caldos", "Lanches", "Bebidas", "Sobremesas",
    "Lancheira Escolar", "Menu Disfarce", "Festinhas Saudáveis",
  ];
  const FASES = ["6-8", "8-10", "10-12", "12+"];

  const prompt = `Você é um assistente que extrai receitas de PDFs para o app Papazz (alimentação infantil).

REGRA MAIS IMPORTANTE: Copie ingredientes e preparo EXATAMENTE como estão no documento. Não invente, não resuma, não modifique quantidades nem instruções.

Extraia TODAS as receitas do PDF e retorne APENAS um JSON válido (sem markdown) no formato:
{
  "receitas": [
    {
      "nome": "Nome exato da receita",
      "tipo": "uma de: ${TIPOS.join(" | ")}",
      "fase": "fase detectada pelo conteúdo (${FASES.join(" | ")}) ou use ${fase} se não identificável",
      "tempo": 20,
      "dificuldade": "Fácil",
      "premium": false,
      "ingredientes": ["ingrediente com quantidade EXATA do documento", "..."],
      "preparo": "Modo de preparo EXATO e COMPLETO do documento, em um único parágrafo.",
      "dicas": "Dicas presentes no documento, ou string vazia se não houver.",
      "tags": ["tag1", "tag2"],
      "restricoes": [],
      "nutrientes": { "calorias": 0, "proteina": 0, "carboidratos": 0, "gordura": 0, "ferro": 0, "calcio": 0 },
      "temImagem": false
    }
  ]
}

Outras regras:
- restricoes: ["Sem Glúten", "Sem Lactose", "Sem Ovo"] apenas se explicitamente indicado
- dificuldade: "Fácil", "Médio" ou "Difícil" baseado no preparo
- tempo: número inteiro em minutos estimado pelo preparo
- nutrientes: valores do documento ou 0 se não informado
- temImagem: true se houver foto/imagem da receita visível no PDF`;

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
        max_tokens: 16000,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "document",
                source: {
                  type: "base64",
                  media_type: "application/pdf",
                  data: pdfBase64,
                },
              },
              { type: "text", text: prompt },
            ],
          },
        ],
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

    const parsed = JSON.parse(jsonMatch[0]);
    if (!Array.isArray(parsed.receitas)) return res.status(500).json({ error: "Nenhuma receita encontrada no PDF" });

    return res.status(200).json({ receitas: parsed.receitas, fileName });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
