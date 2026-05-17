import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { type, data } = req.body;

  if (type !== "payment" || !data?.id) {
    return res.status(200).end();
  }

  try {
    const payment = new Payment(client);
    const result = await payment.get({ id: data.id });

    if (result.status !== "approved") {
      return res.status(200).end();
    }

    const uid = result.external_reference;
    if (!uid) return res.status(200).end();

    // Atualiza premium no Firestore via Admin SDK
    // TODO: adicionar firebase-admin quando service account estiver disponível
    // Por ora loga o pagamento aprovado para debug
    console.log("Pagamento aprovado:", {
      paymentId: data.id,
      uid,
      valor: result.transaction_amount,
      plano: result.description,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).end();
  }
}
