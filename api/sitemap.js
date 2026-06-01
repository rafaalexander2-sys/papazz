const SITE = "https://papazz.com.br";
const TODAY = new Date().toISOString().split("T")[0];

const STATIC_PAGES = [
  { url: "/",           priority: "1.0", changefreq: "weekly"  },
  { url: "/receitas",   priority: "0.9", changefreq: "weekly"  },
  { url: "/blog",       priority: "0.8", changefreq: "weekly"  },
  { url: "/cronograma", priority: "0.8", changefreq: "monthly" },
  { url: "/guia",       priority: "0.7", changefreq: "monthly" },
  { url: "/faq",        priority: "0.7", changefreq: "monthly" },
];

// Posts estáticos hardcoded de src/data/posts.js
const STATIC_POSTS = [
  "introducao-alimentar-12-dicas",
  "blw-vs-papinha-qual-escolher",
  "quando-comecar-introducao-alimentar",
  "alimentos-proibidos-bebe-1-ano",
  "primeira-papinha-bebe-guia",
  "cronograma-6-meses-passo-a-passo",
  "15-receitas-bebe-6-meses",
  "como-fazer-papinha-nutritiva",
  "quantidade-ideal-comida-bebe",
  "bebe-nao-quer-comer-solucoes",
  "reflexo-de-gag-bebe-blw",
  "cardapio-bebe-7-meses",
  "ferro-na-alimentacao-do-bebe",
  "alergia-alimentar-bebe-sintomas",
  "cardapio-bebe-8-meses",
  "bebe-recusa-comida-blw",
  "proteinas-introducao-alimentar",
  "diversidade-alimentar-precoce",
  "bebe-pode-comer-ovo",
  "quando-dar-agua-para-o-bebe",
  "frutas-que-soltam-o-intestino-do-bebe",
  "tempero-para-comida-de-bebe",
  "como-congelar-papinha",
  "cardapio-bebe-9-meses",
];

async function getFirestorePosts() {
  try {
    const projectId = "papazz-b82e0";
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/posts?pageSize=200`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.documents) return [];
    return data.documents.map((doc) => {
      const fields = doc.fields || {};
      return {
        slug: fields.slug?.stringValue || "",
        date: fields.date?.stringValue || TODAY,
      };
    }).filter((p) => p.slug);
  } catch {
    return [];
  }
}

function urlEntry({ url, priority, changefreq, lastmod }) {
  return `  <url>
    <loc>${SITE}${url}</loc>
    <lastmod>${lastmod || TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export default async function handler(req, res) {
  const firestorePosts = await getFirestorePosts();

  // Slugs do Firestore (posts novos criados pelo admin)
  const firestoreSlugs = new Set(firestorePosts.map((p) => p.slug));

  // Posts estáticos que ainda não estão no Firestore (evita duplicatas)
  const staticPostEntries = STATIC_POSTS
    .filter((slug) => !firestoreSlugs.has(slug))
    .map((slug) => urlEntry({ url: `/blog/${slug}`, priority: "0.7", changefreq: "monthly" }));

  // Posts do Firestore com data real
  const firestorePostEntries = firestorePosts.map((p) =>
    urlEntry({ url: `/blog/${p.slug}`, priority: "0.7", changefreq: "monthly", lastmod: p.date })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PAGES.map((p) => urlEntry(p)).join("\n")}
${firestorePostEntries.join("\n")}
${staticPostEntries.join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).send(xml);
}
