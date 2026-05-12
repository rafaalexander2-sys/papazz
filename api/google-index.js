export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    return res.status(503).json({
      error: "GOOGLE_SERVICE_ACCOUNT_KEY não configurada",
      instructions: [
        "1. Acesse console.cloud.google.com",
        "2. Habilite a API 'Web Search Indexing'",
        "3. Crie uma conta de serviço e baixe o JSON",
        "4. Adicione o email da conta de serviço como proprietário no Search Console",
        "5. Cole o JSON completo na variável GOOGLE_SERVICE_ACCOUNT_KEY na Vercel",
      ],
    });
  }

  const { url } = req.body || {};
  if (!url) return res.status(400).json({ error: "url é obrigatório" });

  try {
    const serviceAccount = JSON.parse(serviceAccountKey);

    // Gerar JWT para autenticação
    const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
    const now = Math.floor(Date.now() / 1000);
    const payload = Buffer.from(
      JSON.stringify({
        iss: serviceAccount.client_email,
        scope: "https://www.googleapis.com/auth/indexing",
        aud: "https://oauth2.googleapis.com/token",
        exp: now + 3600,
        iat: now,
      })
    ).toString("base64url");

    const { createSign } = await import("crypto");
    const sign = createSign("RSA-SHA256");
    sign.update(`${header}.${payload}`);
    const signature = sign.sign(serviceAccount.private_key, "base64url");
    const jwt = `${header}.${payload}.${signature}`;

    // Obter access token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });
    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return res.status(500).json({ error: "Falha ao obter token Google", details: tokenData });
    }

    // Solicitar indexação
    const indexRes = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });

    const indexData = await indexRes.json();

    if (!indexRes.ok) {
      return res.status(500).json({ error: "Erro na API de indexação", details: indexData });
    }

    return res.status(200).json({ success: true, url, result: indexData });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
