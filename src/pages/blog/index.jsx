import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Search } from "lucide-react";
import { getAllPosts } from "../../utils/blog";

export default function Blog() {
  const posts = getAllPosts();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Todos", ...new Set(posts.map((p) => p.category))];

  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - MENOR E MAIS CLEAN */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-3">
            Blog Papazz
          </h1>
          <p className="text-base md:text-lg text-white/90 font-corpo mb-6">
            Guias práticos sobre introdução alimentar
          </p>

          {/* Barra de busca - ARREDONDAMENTO 10PX */}
          <div className="max-w-xl">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-[10px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-sm font-corpo text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - MINIMALISTA */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-[10px] p-5 sticky top-24">
              <h3 className="text-base font-titulo font-bold text-gray-900 mb-4">
                Categorias
              </h3>
              <div className="space-y-1.5">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      w-full text-left px-3 py-2 rounded-[8px] transition font-corpo text-sm
                      ${
                        selectedCategory === category
                          ? "bg-[#FF6B6B] text-white font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    {category}
                    <span className="float-right opacity-70 text-xs">
                      (
                      {category === "Todos"
                        ? posts.length
                        : posts.filter((p) => p.category === category).length}
                      )
                    </span>
                  </button>
                ))}
              </div>

              {/* Tópicos */}
              <div className="mt-6 pt-5 border-t border-gray-200">
                <h3 className="text-sm font-titulo font-bold text-gray-900 mb-3">
                  Tópicos Populares
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["BLW", "Papinha", "6 meses", "Receitas"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#FFF5F5] text-[#FF6B6B] text-xs rounded-[6px] font-corpo font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <main className="lg:col-span-3">
            {/* Post em Destaque - LAYOUT HORIZONTAL CLEAN */}
            {selectedCategory === "Todos" && !searchTerm && featuredPost && (
              <div className="mb-10">
                <h2 className="text-xl font-titulo font-bold text-gray-900 mb-4">
                  Post em Destaque
                </h2>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <article className="bg-white border border-gray-200 rounded-[10px] overflow-hidden hover:shadow-md transition group">
                    <div className="md:flex">
                      <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-1 bg-[#FF6B6B] text-white text-xs rounded-[6px] font-corpo font-semibold uppercase tracking-wide">
                            {featuredPost.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500 font-corpo">
                            <Calendar size={12} />
                            {new Date(featuredPost.date).toLocaleDateString(
                              "pt-BR",
                            )}
                          </span>
                        </div>

                        <h3 className="text-2xl font-titulo font-bold text-gray-900 mb-3 group-hover:text-[#FF6B6B] transition leading-tight">
                          {featuredPost.title}
                        </h3>

                        <p className="text-gray-600 mb-4 font-corpo leading-relaxed text-sm line-clamp-2">
                          {featuredPost.description}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-gray-500 font-corpo">
                          {featuredPost.readingTime && (
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {featuredPost.readingTime}
                            </span>
                          )}
                          <span className="text-[#FF6B6B] font-semibold group-hover:underline">
                            Ler artigo →
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            )}

            {/* Título da seção */}
            <div className="mb-6">
              <h2 className="text-xl font-titulo font-bold text-gray-900">
                {selectedCategory === "Todos"
                  ? "Todos os Artigos"
                  : selectedCategory}
                <span className="text-gray-400 font-corpo ml-2 text-base">
                  ({filteredPosts.length})
                </span>
              </h2>
            </div>

            {/* Grid de posts - DESIGN LIMPO */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-[10px] border border-gray-200">
                <div className="text-5xl mb-3">🔍</div>
                <h3 className="text-lg font-titulo font-bold text-gray-900 mb-2">
                  Nenhum post encontrado
                </h3>
                <p className="text-gray-600 font-corpo text-sm">
                  Tente buscar por outro termo ou categoria
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`}>
                    <article className="bg-white border border-gray-200 rounded-[10px] overflow-hidden hover:shadow-md transition h-full flex flex-col group">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-1 bg-[#FFF5F5] text-[#FF6B6B] text-xs rounded-[6px] font-corpo font-semibold uppercase tracking-wide">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500 font-corpo">
                            <Calendar size={11} />
                            {new Date(post.date).toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "short",
                            })}
                          </span>
                        </div>

                        <h3 className="text-lg font-titulo font-bold text-gray-900 mb-2 group-hover:text-[#FF6B6B] transition leading-tight line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 font-corpo flex-1 leading-relaxed text-sm line-clamp-2">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          {post.readingTime && (
                            <span className="flex items-center gap-1 text-xs text-gray-500 font-corpo">
                              <Clock size={11} />
                              {post.readingTime}
                            </span>
                          )}
                          <span className="text-[#FF6B6B] font-semibold text-xs group-hover:underline font-corpo">
                            Ler mais →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
