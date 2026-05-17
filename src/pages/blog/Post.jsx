import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getPostBySlug } from "../../utils/blog";
import { incrementPostViews } from "../../services/firestoreService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SITE_URL = "https://papazz.com.br";

function SEOMeta({ post }) {
  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | Papazz`;

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", post.description || post.title);
    setMeta("keywords", Array.isArray(post.keywords) ? post.keywords.join(", ") : post.keywords || "");
    setMeta("author", post.author || "Equipe Papazz");
    setMeta("robots", "index, follow");
    if (post.date) {
      setMeta("article:published_time", new Date(post.date).toISOString(), true);
      setMeta("article:modified_time", new Date(post.date).toISOString(), true);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", `${SITE_URL}/blog/${post.slug}`);

    setMeta("og:title", post.title, true);
    setMeta("og:description", post.description || post.title, true);
    setMeta("og:image", post.image || `${SITE_URL}/og-default.jpg`, true);
    setMeta("og:url", `${SITE_URL}/blog/${post.slug}`, true);
    setMeta("og:type", "article", true);
    setMeta("og:site_name", "Papazz", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", post.title);
    setMeta("twitter:description", post.description || post.title);
    if (post.image) setMeta("twitter:image", post.image);

    const existing = document.getElementById("json-ld-article");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "json-ld-article";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: post.image,
      author: { "@type": "Organization", name: post.author || "Equipe Papazz" },
      publisher: {
        "@type": "Organization",
        name: "Papazz",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-app.png` },
      },
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      keywords: Array.isArray(post.keywords) ? post.keywords.join(", ") : post.keywords,
    });
    document.head.appendChild(script);

    return () => {
      document.title = "Papazz";
      const cleanup = document.getElementById("json-ld-article");
      if (cleanup) cleanup.remove();
    };
  }, [post]);

  return null;
}

const mdComponents = (postTitle) => ({
  h1: () => null,
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-titulo font-bold text-gray-900 mt-16 mb-6 pb-4 border-b-2 border-gray-100 leading-[1.2]" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-titulo font-bold text-gray-800 mt-10 mb-4 leading-[1.3]" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-lg text-gray-700 leading-[1.7] mb-6 font-corpo" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-bold text-gray-900" {...props}>{children}</strong>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-8 space-y-2" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-8 space-y-2 list-decimal pl-6" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-lg text-gray-700 leading-[1.6] pl-8 relative font-corpo before:content-['→'] before:absolute before:left-0 before:text-[#FF6B6B] before:font-bold" {...props}>
      {children}
    </li>
  ),
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link to={href} className="text-[#FF6B6B] font-semibold hover:underline" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="text-[#FF6B6B] font-semibold hover:underline" {...props}>
        {children}
      </a>
    );
  },
});

function splitContentAtMidpoint(content) {
  const blocks = content.split(/\n\n+/);
  const mid = Math.ceil(blocks.length / 2);
  return [
    blocks.slice(0, mid).join("\n\n"),
    blocks.slice(mid).join("\n\n"),
  ];
}

function CTAMid() {
  return (
    <div className="my-12 rounded-[16px] overflow-hidden border border-[#FFD6D6] bg-gradient-to-r from-[#FFF0F0] to-[#FFF8F5]">
      <div className="flex flex-col md:flex-row items-center gap-6 p-7">
        <div className="text-5xl shrink-0">👶</div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6B6B] mb-1 font-corpo">Papazz Premium</p>
          <h4 className="text-xl font-titulo font-bold text-gray-900 mb-2 leading-tight">
            Mais de 200 receitas por fase da introdução alimentar
          </h4>
          <p className="text-sm text-gray-600 font-corpo leading-relaxed">
            Cronogramas semanais automáticos, cardápios prontos e receitas testadas por nutricionistas pediátricos.
          </p>
        </div>
        <Link
          to="/"
          className="shrink-0 bg-[#FF6B6B] text-white font-bold px-6 py-3 rounded-full hover:bg-[#ff5252] transition font-corpo text-sm whitespace-nowrap"
        >
          Conhecer grátis →
        </Link>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostBySlug(slug).then((p) => {
      setPost(p || null);
      setLoading(false);
      if (p?.id) incrementPostViews(p.id);
    });
  }, [slug]);

  const [firstHalf, secondHalf] = useMemo(() => {
    if (!post?.content) return ["", ""];
    return splitContentAtMidpoint(post.content);
  }, [post?.content]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-400">Carregando...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-titulo font-bold text-gray-800 mb-4">Post não encontrado</h1>
          <Link to="/blog" className="text-[#FF6B6B] hover:underline">Voltar para o blog</Link>
        </div>
      </div>
    );
  }

  const components = mdComponents(post.title);

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta post={post} />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft size={20} />
            <span className="font-corpo">Voltar para o Blog</span>
          </Link>
        </div>
      </div>

      {/* Imagem de Capa */}
      {post.image && (
        <div className="w-full h-[500px] overflow-hidden bg-gray-100">
          <img
            src={post.image}
            alt={`Guia completo sobre ${post.title.toLowerCase()}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span className="px-3 py-1 bg-[#FF6B6B] text-white text-xs rounded-pill font-corpo font-semibold uppercase tracking-wide">
            {post.category}
          </span>
          <span className="flex items-center gap-1 font-corpo">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
          </span>
          {post.readingTime && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1 font-corpo">
                <Clock size={16} />
                {post.readingTime}
              </span>
            </>
          )}
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-titulo font-bold text-gray-900 mb-6 leading-[1.1]">
          {post.title}
        </h1>

        {/* Descrição */}
        <p className="text-xl text-gray-600 mb-12 font-corpo leading-[1.6] border-l-4 border-[#FF6B6B] pl-6">
          {post.description}
        </p>

        {/* Primeira metade do conteúdo */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {firstHalf}
          </ReactMarkdown>
        </div>

        {/* Imagem do meio (image2) — só aparece se existir */}
        {post.image2 && (
          <figure className="my-12">
            <img
              src={post.image2}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-medio shadow-media"
            />
          </figure>
        )}

        {/* CTA no meio */}
        <CTAMid />

        {/* Segunda metade do conteúdo */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {secondHalf}
          </ReactMarkdown>
        </div>

        {/* Links Relacionados */}
        <div className="mt-16 p-8 bg-gray-50 rounded-medio border border-gray-200">
          <h3 className="text-xl font-titulo font-bold text-gray-900 mb-4">Continue Lendo</h3>
          <div className="space-y-3">
            <Link to="/receitas" className="block text-[#FF6B6B] hover:underline font-corpo">
              → Veja todas as receitas organizadas por fase
            </Link>
            <Link to="/cronograma" className="block text-[#FF6B6B] hover:underline font-corpo">
              → Cronogramas personalizados por idade do bebê
            </Link>
            <Link to="/" className="block text-[#FF6B6B] hover:underline font-corpo">
              → Conheça o Papazz Premium com +200 receitas
            </Link>
          </div>
        </div>

        {/* Fontes */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-medio">
          <h4 className="text-lg font-titulo font-bold text-gray-900 mb-3">Fontes e Referências</h4>
          <ul className="space-y-2 text-sm font-corpo">
            <li>
              <a href="https://www.who.int/health-topics/complementary-feeding" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                Organização Mundial da Saúde (OMS) - Alimentação Complementar
              </a>
            </li>
            <li>
              <a href="https://www.sbp.com.br/departamentos-cientificos/dc-nutrologia/documentos-cientificos/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                Sociedade Brasileira de Pediatria (SBP) - Guia de Nutrição
              </a>
            </li>
            <li>
              <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/publicacoes/guia-alimentar-para-criancas-brasileiras-menores-de-2-anos" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                Ministério da Saúde - Guia Alimentar para Crianças Menores de 2 Anos
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Final */}
        <div className="mt-16 p-10 bg-gradient-to-br from-[#FF8B94] to-[#FFB5A7] rounded-medio text-white">
          <h3 className="text-3xl font-titulo font-bold mb-4">Quer facilitar a introdução alimentar?</h3>
          <p className="mb-6 text-lg text-white/90 font-corpo leading-[1.6]">
            Mais de 200 receitas organizadas por fase, cronogramas personalizados e planejamento semanal automático.
          </p>
          <Link to="/" className="inline-block bg-white text-[#FF6B6B] font-bold px-8 py-4 rounded-pill hover:bg-gray-50 transition font-corpo text-lg">
            Conhecer o Papazz Premium →
          </Link>
        </div>

        {/* Compartilhar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-500 font-corpo">
            Escrito por <strong>{post.author}</strong>
          </p>
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FF6B6B] transition font-corpo">
            <Share2 size={18} />
            Compartilhar
          </button>
        </div>
      </article>
    </div>
  );
}
