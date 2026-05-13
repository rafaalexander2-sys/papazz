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
  const posts = await getFirestorePosts();

  const staticEntries = STATIC_PAGES.map((p) => urlEntry(p)).join("\n");
  const postEntries = posts.map((p) =>
    urlEntry({ url: `/blog/${p.slug}`, priority: "0.7", changefreq: "monthly", lastmod: p.date })
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${postEntries}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).send(xml);
}
