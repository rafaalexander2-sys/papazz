import { createSign } from "crypto";
import { readFileSync } from "fs";

const SITE = "https://papazz.com.br";

const URLS = [
  "/blog/reflexo-de-gag-bebe-blw",
  "/blog/cardapio-bebe-7-meses",
  "/blog/ferro-na-alimentacao-do-bebe",
  "/blog/alergia-alimentar-bebe-sintomas",
  "/blog/cardapio-bebe-8-meses",
  "/blog/bebe-recusa-comida-blw",
  "/blog/proteinas-introducao-alimentar",
  "/blog/diversidade-alimentar-precoce",
  "/blog/introducao-alimentar-12-dicas",
  "/blog/blw-vs-papinha-qual-escolher",
  "/blog/quando-comecar-introducao-alimentar",
  "/blog/alimentos-proibidos-bebe-1-ano",
  "/blog/primeira-papinha-bebe-guia",
  "/blog/cronograma-6-meses-passo-a-passo",
  "/blog/15-receitas-bebe-6-meses",
  "/blog/como-fazer-papinha-nutritiva",
  "/blog/quantidade-ideal-comida-bebe",
  "/blog/bebe-nao-quer-comer-solucoes",
];

async function getAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  })).toString("base64url");

  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(serviceAccount.private_key, "base64url");
  const jwt = `${header}.${payload}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json();
  return data.access_token;
}

async function indexUrl(url, token) {
  const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  return res.ok ? "OK" : `ERRO ${res.status}`;
}

async function pingSitemap() {
  const url = `https://www.google.com/ping?sitemap=${SITE}/sitemap.xml`;
  const res = await fetch(url);
  console.log(`Sitemap ping: ${res.status === 200 ? "OK" : "ERRO"}`);
}

async function main() {
  // Sempre faz ping do sitemap
  await pingSitemap();

  // Tenta usar a Google Indexing API se tiver service account
  const keyPath = process.argv[2];
  if (!keyPath) {
    console.log("\nPing do sitemap enviado. Para indexacao direta, rode:");
    console.log("node scripts/force-index.mjs caminho/para/service-account.json");
    return;
  }

  let serviceAccount;
  try {
    serviceAccount = JSON.parse(readFileSync(keyPath, "utf8"));
  } catch {
    console.error("Erro ao ler service account JSON");
    process.exit(1);
  }

  console.log("\nObtendo token Google...");
  const token = await getAccessToken(serviceAccount);
  if (!token) { console.error("Falha ao obter token"); process.exit(1); }

  console.log(`Enviando ${URLS.length} URLs para indexacao...\n`);
  for (const path of URLS) {
    const fullUrl = `${SITE}${path}`;
    const result = await indexUrl(fullUrl, token);
    console.log(`${result} — ${fullUrl}`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log("\nConcluido.");
}

main().catch(console.error);
