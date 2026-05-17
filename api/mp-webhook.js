import { MercadoPagoConfig, Payment } from "mercadopago";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAdminDb() {
  if (!getApps().length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    initializeApp({ credential: cert(serviceAccount) });
  }
  return getFirestore();
}

const mpClient = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { type, data } = req.body;

  if (type !== "payment" || !data?.id) return res.status(200).end();

  try {
    const payment = new Payment(mpClient);
    const result = await payment.get({ id: data.id });

    if (result.status !== "approved") return res.status(200).end();

    const uid = result.external_reference;
    if (!uid) return res.status(200).end();

    const db = getAdminDb();
    await db.collection("users").doc(uid).set(
      {
        premium: true,
        premiumSince: new Date().toISOString(),
        ultimoPagamentoId: String(data.id),
        plano: result.description,
      },
      { merge: true }
    );

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).end();
  }
}
