import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getPostBySlug } from "../../utils/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-titulo font-bold text-gray-800 mb-4">
            Post não encontrado
          </h1>
          <Link to="/blog" className="text-[#FF6B6B] hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  // Contador de parágrafos para inserir imagens
  let paragraphCount = 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header com Logo */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
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

      {/* Conteúdo do Post */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span className="px-3 py-1 bg-[#FF6B6B] text-white text-xs rounded-pill font-corpo font-semibold uppercase tracking-wide">
            {post.category}
          </span>
          <span className="flex items-center gap-1 font-corpo">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
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

        {/* Conteúdo Markdown */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Remover H1 (já temos o título)
              h1: () => null,

              // H2 - Seções principais
              h2: ({ node, children, ...props }) => {
                paragraphCount = 0; // Reset ao encontrar novo H2
                return (
                  <h2
                    className="text-3xl font-titulo font-bold text-gray-900 mt-16 mb-6 pb-4 border-b-2 border-gray-100 leading-[1.2]"
                    {...props}
                  >
                    {children}
                  </h2>
                );
              },

              // H3 - Subseções
              h3: ({ node, children, ...props }) => (
                <h3
                  className="text-2xl font-titulo font-bold text-gray-800 mt-10 mb-4 leading-[1.3]"
                  {...props}
                >
                  {children}
                </h3>
              ),

              // Parágrafos com imagens intercaladas
              p: ({ node, children, ...props }) => {
                paragraphCount++;

                // Inserir IMAGEM 1 após o 3º parágrafo
                if (paragraphCount === 3) {
                  return (
                    <>
                      <p
                        className="text-lg text-gray-700 leading-[1.7] mb-6 font-corpo"
                        {...props}
                      >
                        {children}
                      </p>

                      {/* IMAGEM 1 - Bebê comendo */}
                      <figure className="my-12">
                        <img
                          src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=600&fit=crop"
                          alt="Bebê de 6 meses fazendo introdução alimentar com alimentos saudáveis"
                          className="w-full h-[400px] object-cover rounded-medio shadow-media"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-4 font-corpo italic">
                          Bebê explorando alimentos durante a introdução
                          alimentar aos 6 meses
                        </figcaption>
                      </figure>
                    </>
                  );
                }

                // Inserir IMAGEM 2 após o 8º parágrafo
                if (paragraphCount === 8) {
                  return (
                    <>
                      <p
                        className="text-lg text-gray-700 leading-[1.7] mb-6 font-corpo"
                        {...props}
                      >
                        {children}
                      </p>

                      {/* IMAGEM 2 - Alimentos coloridos */}
                      <figure className="my-12">
                        <img
                          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop"
                          alt="Papinha de bebê com legumes coloridos e alimentos nutritivos para introdução alimentar"
                          className="w-full h-[400px] object-cover rounded-medio shadow-media"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-4 font-corpo italic">
                          Refeição balanceada para bebês: legumes variados e
                          coloridos
                        </figcaption>
                      </figure>
                    </>
                  );
                }

                return (
                  <p
                    className="text-lg text-gray-700 leading-[1.7] mb-6 font-corpo"
                    {...props}
                  >
                    {children}
                  </p>
                );
              },

              // Strong (negrito)
              strong: ({ node, children, ...props }) => (
                <strong className="font-bold text-gray-900" {...props}>
                  {children}
                </strong>
              ),

              // Listas não ordenadas
              ul: ({ node, children, ...props }) => (
                <ul className="my-8 space-y-2" {...props}>
                  {children}
                </ul>
              ),

              // Itens de lista
              li: ({ node, children, ...props }) => (
                <li
                  className="text-lg text-gray-700 leading-[1.6] pl-8 relative font-corpo before:content-['→'] before:absolute before:left-0 before:text-[#FF6B6B] before:font-bold"
                  {...props}
                >
                  {children}
                </li>
              ),

              // Links
              a: ({ node, href, children, ...props }) => {
                // Link interno (começa com /)
                if (href?.startsWith("/")) {
                  return (
                    <Link
                      to={href}
                      className="text-[#FF6B6B] font-semibold hover:underline"
                      {...props}
                    >
                      {children}
                    </Link>
                  );
                }

                // Link externo
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#FF6B6B] font-semibold hover:underline"
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Links Relacionados */}
        <div className="mt-16 p-8 bg-gray-50 rounded-medio border border-gray-200">
          <h3 className="text-xl font-titulo font-bold text-gray-900 mb-4">
            Continue Lendo
          </h3>
          <div className="space-y-3">
            <Link
              to="/receitas"
              className="block text-[#FF6B6B] hover:underline font-corpo"
            >
              → Veja todas as receitas organizadas por fase
            </Link>
            <Link
              to="/cronograma"
              className="block text-[#FF6B6B] hover:underline font-corpo"
            >
              → Cronogramas personalizados por idade do bebê
            </Link>
            <Link
              to="/"
              className="block text-[#FF6B6B] hover:underline font-corpo"
            >
              → Conheça o Papazz Premium com +200 receitas
            </Link>
          </div>
        </div>

        {/* Fontes e Referências */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-medio">
          <h4 className="text-lg font-titulo font-bold text-gray-900 mb-3">
            📚 Fontes e Referências
          </h4>
          <ul className="space-y-2 text-sm font-corpo">
            <li>
              <a
                href="https://www.who.int/health-topics/complementary-feeding"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Organização Mundial da Saúde (OMS) - Alimentação Complementar
              </a>
            </li>
            <li>
              <a
                href="https://www.sbp.com.br/departamentos-cientificos/dc-nutrologia/documentos-cientificos/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Sociedade Brasileira de Pediatria (SBP) - Guia de Nutrição
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/publicacoes/guia-alimentar-para-criancas-brasileiras-menores-de-2-anos"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Ministério da Saúde - Guia Alimentar para Crianças Menores de 2
                Anos
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Final */}
        <div className="mt-16 p-10 bg-gradient-to-br from-[#FF8B94] to-[#FFB5A7] rounded-medio text-white">
          <h3 className="text-3xl font-titulo font-bold mb-4">
            Quer facilitar a introdução alimentar?
          </h3>
          <p className="mb-6 text-lg text-white/90 font-corpo leading-[1.6]">
            Mais de 200 receitas organizadas por fase, cronogramas
            personalizados e planejamento semanal automático.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-[#FF6B6B] font-bold px-8 py-4 rounded-pill hover:bg-gray-50 transition font-corpo text-lg"
          >
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
