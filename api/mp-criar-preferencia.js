import { MercadoPagoConfig, Preference } from "mercadopago";

const PLANOS = {
  mensal: {
    title: "Papazz Premium - Mensal",
    unit_price: 19.9,
  },
  anual: {
    title: "Papazz Premium - Anual",
    unit_price: 149.0,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { plano, uid, email } = req.body;

  if (!plano || !uid || !PLANOS[plano]) {
    return res.status(400).json({ error: "Dados inválidos" });
  }

  const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
  });

  const preference = new Preference(client);

  const baseUrl = process.env.APP_URL || "https://papazz.com.br";

  try {
    const result = await preference.create({
      body: {
        items: [
          {
            id: plano,
            title: PLANOS[plano].title,
            quantity: 1,
            currency_id: "BRL",
            unit_price: PLANOS[plano].unit_price,
          },
        ],
        payer: { email },
        external_reference: uid,
        back_urls: {
          success: `${baseUrl}/pagamento/sucesso`,
          failure: `${baseUrl}/pagamento/falha`,
          pending: `${baseUrl}/pagamento/pendente`,
        },
        auto_return: "approved",
        notification_url: `${baseUrl}/api/mp-webhook`,
      },
    });

    return res.status(200).json({ init_point: result.init_point });
  } catch (err) {
    console.error("MP preference error:", err);
    return res.status(500).json({ error: "Erro ao criar preferência" });
  }
}
