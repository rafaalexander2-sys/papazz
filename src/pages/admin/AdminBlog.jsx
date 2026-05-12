import { useState, useEffect } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, Save, X, Sparkles, AlertCircle } from "lucide-react";
import {
  getPostsFromFirestore,
  addPost,
  deletePost,
} from "../../services/firestoreService";

const CATEGORIAS = ["Guias", "Nutrição", "BLW", "Dicas", "Receitas", "Desenvolvimento", "Saúde"];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function calcReadingTime(text) {
  const words = text.split(/\s+/).length;
  const mins = Math.ceil(words / 200);
  return `${mins} min`;
}

const EMPTY_FORM = {
  title: "",
  description: "",
  category: "Guias",
  keywords: "",
  author: "Equipe Papazz",
  image: "",
  content: "",
};

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [msg, setMsg] = useState(null);
  const [claudeAvailable, setClaudeAvailable] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const data = await getPostsFromFirestore();
    setPosts(data);
    setLoading(false);
  }

  function setField(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleGenerate() {
    if (!form.title.trim()) {
      setMsg({ type: "error", text: "Preencha o título antes de gerar o conteúdo." });
      return;
    }
    setGenerating(true);
    setMsg(null);
    try {
      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          keywords: form.keywords,
          category: form.category,
          description: form.description,
        }),
      });

      if (res.status === 503) {
        setClaudeAvailable(false);
        setMsg({
          type: "error",
          text: "API do Claude não configurada. Adicione ANTHROPIC_API_KEY nas variáveis de ambiente da Vercel.",
        });
        setGenerating(false);
        return;
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setField("content", data.content);
      if (!form.description && data.description) setField("description", data.description);
      setMsg({ type: "success", text: "Artigo gerado! Revise o conteúdo antes de publicar." });
    } catch (e) {
      setMsg({ type: "error", text: "Erro ao gerar: " + e.message });
    }
    setGenerating(false);
  }

  async function handleSave() {
    if (!form.title.trim() || !form.content.trim()) {
      setMsg({ type: "error", text: "Título e conteúdo são obrigatórios." });
      return;
    }
    setSaving(true);
    try {
      const slug = slugify(form.title) + "-" + Date.now();
      await addPost({
        ...form,
        slug,
        keywords: form.keywords
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        date: new Date().toISOString().split("T")[0],
        readingTime: calcReadingTime(form.content),
      });
      setMsg({ type: "success", text: `"${form.title}" publicado no blog!` });
      setForm(EMPTY_FORM);
      setShowForm(false);
      await load();
    } catch (e) {
      setMsg({ type: "error", text: "Erro ao publicar: " + e.message });
    }
    setSaving(false);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Excluir "${title}"?`)) return;
    await deletePost(id);
    setMsg({ type: "success", text: `"${title}" excluído.` });
    await load();
  }

  return (
    <div>
      {/* Cabeçalho */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Blog</h2>
          <p className="text-sm text-gray-500 mt-1">
            {posts.length} post{posts.length !== 1 ? "s" : ""} publicados no Firestore
          </p>
        </div>
        <button
          onClick={() => { setShowForm(true); setMsg(null); }}
          className="flex items-center gap-2 bg-[#FF6B6B] text-white px-5 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition"
        >
          <Plus size={18} />
          Novo Post
        </button>
      </div>

      {/* Aviso Claude indisponível */}
      {!claudeAvailable && (
        <div className="mb-4 px-4 py-3 rounded-[10px] bg-amber-50 border border-amber-200 text-amber-800 text-sm flex gap-2">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>
            <strong>Claude não configurado.</strong> Para ativar a geração automática de posts,
            adicione <code className="bg-amber-100 px-1 rounded">ANTHROPIC_API_KEY</code> nas
            variáveis de ambiente do projeto na Vercel. A chave pode ser obtida em{" "}
            <strong>console.anthropic.com</strong>.
          </span>
        </div>
      )}

      {/* Mensagem */}
      {msg && (
        <div
          className={`mb-4 px-4 py-3 rounded-[10px] text-sm font-medium ${
            msg.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {msg.text}
        </div>
      )}

      {/* Formulário */}
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-[10px] p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Novo Post do Blog</h3>
            <button onClick={() => { setShowForm(false); setForm(EMPTY_FORM); }}>
              <X size={20} className="text-gray-400 hover:text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Título */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Título do Artigo *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setField("title", e.target.value)}
                placeholder="Ex: Introdução Alimentar aos 6 Meses: Guia Completo"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>

            {/* Categoria */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Categoria
              </label>
              <select
                value={form.category}
                onChange={(e) => setField("category", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              >
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Autor */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Autor
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => setField("author", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>

            {/* Palavras-chave */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Palavras-chave SEO{" "}
                <span className="font-normal text-gray-400">(separadas por vírgula)</span>
              </label>
              <input
                type="text"
                value={form.keywords}
                onChange={(e) => setField("keywords", e.target.value)}
                placeholder="introdução alimentar, bebê 6 meses, papinha, BLW"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>

            {/* Meta description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Meta Description{" "}
                <span className="font-normal text-gray-400">(resumo para Google, max 160 chars)</span>
              </label>
              <textarea
                rows={2}
                maxLength={160}
                value={form.description}
                onChange={(e) => setField("description", e.target.value)}
                placeholder="Guia completo sobre introdução alimentar aos 6 meses: quando começar, o que oferecer e como facilitar..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">{form.description.length}/160</p>
            </div>

            {/* Imagem */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                URL da Imagem de Capa{" "}
                <span className="font-normal text-gray-400">(opcional)</span>
              </label>
              <input
                type="url"
                value={form.image}
                onChange={(e) => setField("image", e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>
          </div>

          {/* Área de conteúdo com botão Claude */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-semibold text-gray-700">
                Conteúdo do Artigo (Markdown) *
              </label>
              <button
                onClick={handleGenerate}
                disabled={generating || !form.title.trim()}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-[10px] text-sm font-semibold hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-60"
              >
                <Sparkles size={15} />
                {generating ? "Gerando com Claude..." : "Gerar com Claude"}
              </button>
            </div>
            {generating && (
              <div className="mb-2 text-xs text-purple-600 font-medium animate-pulse">
                Claude está escrevendo o artigo com SEO máximo...
              </div>
            )}
            <textarea
              rows={16}
              value={form.content}
              onChange={(e) => setField("content", e.target.value)}
              placeholder="Cole ou escreva o conteúdo em Markdown aqui, ou clique em 'Gerar com Claude' para criar automaticamente."
              className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-y"
            />
            <p className="text-xs text-gray-400 mt-1">
              Suporte a Markdown: **negrito**, ## Título, - lista, etc.
            </p>
          </div>

          {/* Preview do slug */}
          {form.title && (
            <p className="text-xs text-gray-400 mb-4">
              URL: <code className="bg-gray-100 px-1 rounded">/blog/{slugify(form.title)}-...</code>
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition disabled:opacity-60"
            >
              <Save size={16} />
              {saving ? "Publicando..." : "Publicar Post"}
            </button>
            <button
              onClick={() => { setShowForm(false); setForm(EMPTY_FORM); }}
              className="px-6 py-2.5 rounded-[10px] border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de posts */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Carregando...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-[10px]">
          Nenhum post no Firestore ainda.
          <br />
          <span className="text-sm">Posts estáticos continuam no blog normalmente.</span>
        </div>
      ) : (
        <div className="space-y-2">
          {posts.map((p) => (
            <div key={p.id} className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold shrink-0">
                    {p.category}
                  </span>
                  <span className="font-medium text-gray-900 truncate">{p.title}</span>
                  <span className="text-xs text-gray-400 shrink-0">{p.date}</span>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <button
                    onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                    className="text-gray-400 hover:text-gray-700 transition"
                  >
                    {expandedId === p.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <button
                    onClick={() => handleDelete(p.id, p.title)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              {expandedId === p.id && (
                <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600 space-y-2">
                  <p><strong>Slug:</strong> /blog/{p.slug}</p>
                  <p><strong>Autor:</strong> {p.author} | <strong>Leitura:</strong> {p.readingTime}</p>
                  {p.description && <p><strong>Meta:</strong> {p.description}</p>}
                  {p.keywords?.length > 0 && (
                    <p><strong>Keywords:</strong> {Array.isArray(p.keywords) ? p.keywords.join(", ") : p.keywords}</p>
                  )}
                  <p className="line-clamp-2"><strong>Início:</strong> {p.content?.substring(0, 150)}...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
