import { useState, useEffect, useRef } from "react";
import { Trash2, ChevronDown, ChevronUp, Save, X, Sparkles, AlertCircle, PenLine, Link2, ImageIcon, Pencil, ExternalLink, Eye } from "lucide-react";
import { getPostsFromFirestore, addPost, updatePost, deletePost } from "../../services/firestoreService";
import { uploadImage } from "../../services/storageService";

const CATEGORIAS = ["Guias", "Nutrição", "BLW", "Dicas", "Receitas", "Desenvolvimento", "Saúde"];

function calcReadingTime(text) {
  return `${Math.ceil(text.split(/\s+/).length / 200)} min`;
}

const EMPTY_FORM = {
  title: "", slug: "", description: "", category: "Guias",
  keywords: "", author: "Equipe Papazz",
  image: "", image2: "", content: "",
};

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creationMode, setCreationMode] = useState(null); // null | "manual" | "ia"
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [iaInput, setIaInput] = useState("");
  const [iaKeywords, setIaKeywords] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingImg2, setUploadingImg2] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState(null);
  const [claudeAvailable, setClaudeAvailable] = useState(true);
  const coverRef = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    setPosts(await getPostsFromFirestore());
    setLoading(false);
  }

  function setField(field, value) { setForm((f) => ({ ...f, [field]: value })); }

  async function handleUploadCover(file) {
    if (!file) return;
    setUploadingCover(true);
    try {
      const url = await uploadImage(file, "blog/capas");
      setField("image", url);
    } catch (e) { setMsg({ type: "error", text: "Erro upload capa: " + e.message }); }
    setUploadingCover(false);
  }

  async function handleUploadImg2(file) {
    if (!file) return;
    setUploadingImg2(true);
    try {
      const url = await uploadImage(file, "blog/conteudo");
      setField("image2", url);
    } catch (e) { setMsg({ type: "error", text: "Erro upload imagem 2: " + e.message }); }
    setUploadingImg2(false);
  }

  async function handleGenerate() {
    if (!iaInput.trim()) { setMsg({ type: "error", text: "Digite um tema ou cole uma URL." }); return; }
    setGenerating(true);
    setMsg(null);
    try {
      const isUrl = /^https?:\/\//i.test(iaInput.trim());
      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [isUrl ? "sourceUrl" : "topic"]: iaInput.trim(),
          keywords: iaKeywords,
        }),
      });

      if (res.status === 503) {
        setClaudeAvailable(false);
        setMsg({ type: "error", text: "API do Claude não configurada. Adicione ANTHROPIC_API_KEY na Vercel." });
        setGenerating(false);
        return;
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setForm({
        title: data.title || "",
        slug: data.slug || "",
        description: data.description || "",
        category: data.category || "Guias",
        keywords: Array.isArray(data.keywords) ? data.keywords.join(", ") : data.keywords || iaKeywords,
        author: "Equipe Papazz",
        image: data.imageUrl || "",
        image2: data.imageUrl2 || "",
        content: data.content || "",
      });
      setCreationMode("manual");
      const imgMsg = data.imageUrl
        ? ` Capa${data.imageUrl2 ? " e imagem de conteúdo extraídas" : " extraída"} automaticamente.`
        : " Adicione as imagens.";
      setMsg({ type: "success", text: `Artigo gerado pelo Claude!${imgMsg} Revise antes de publicar.` });
    } catch (e) {
      setMsg({ type: "error", text: "Erro ao gerar: " + e.message });
    }
    setGenerating(false);
  }

  function handleEdit(p) {
    setEditingId(p.id);
    setForm({
      title: p.title || "",
      slug: p.slug || "",
      description: p.description || "",
      category: p.category || "Guias",
      keywords: Array.isArray(p.keywords) ? p.keywords.join(", ") : p.keywords || "",
      author: p.author || "Equipe Papazz",
      image: p.image || "",
      image2: p.image2 || "",
      content: p.content || "",
    });
    setCreationMode("manual");
    setMsg(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSave() {
    if (!form.title.trim() || !form.content.trim()) { setMsg({ type: "error", text: "Título e conteúdo são obrigatórios." }); return; }
    setSaving(true);
    try {
      const slug = form.slug || (form.title.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")) + "-" + Date.now();
      const payload = {
        ...form,
        slug,
        keywords: form.keywords.split(",").map((s) => s.trim()).filter(Boolean),
        readingTime: calcReadingTime(form.content),
      };

      if (editingId) {
        await updatePost(editingId, payload);
        setMsg({ type: "success", text: `"${form.title}" atualizado!`, link: `/blog/${slug}` });
      } else {
        await addPost({ ...payload, date: new Date().toISOString().split("T")[0] });
        const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://papazz.com.br";
        fetch("/api/google-index", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: `${siteUrl}/blog/${slug}` }),
        }).catch(() => {});
        setMsg({ type: "success", text: `"${form.title}" publicado!`, link: `/blog/${slug}` });
      }

      setForm(EMPTY_FORM);
      setCreationMode(null);
      setEditingId(null);
      await load();
    } catch (e) {
      setMsg({ type: "error", text: "Erro ao salvar: " + e.message });
    }
    setSaving(false);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Excluir "${title}"?`)) return;
    await deletePost(id);
    setMsg({ type: "success", text: `"${title}" excluído.` });
    await load();
  }

  const ImageUploadField = ({ label, fieldKey, uploadFn, uploading, inputRef, note }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label} <span className="font-normal text-gray-400 text-xs">{note}</span></label>
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-gray-300 rounded-[10px] p-4 cursor-pointer hover:border-[#FF6B6B] hover:bg-[#FFF5F5] transition min-h-[80px] flex items-center justify-center">
        {uploading ? (
          <p className="text-sm text-purple-600 animate-pulse">Enviando...</p>
        ) : form[fieldKey] ? (
          <div className="w-full">
            <img src={form[fieldKey]} alt="preview" className="h-20 w-full object-cover rounded-[8px] mb-1" />
            <p className="text-xs text-center text-green-600">Clique para trocar</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <ImageIcon size={24} />
            <p className="text-xs">Clique para fazer upload</p>
          </div>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => uploadFn(e.target.files?.[0])} />
      <input type="url" value={form[fieldKey]} onChange={(e) => setField(fieldKey, e.target.value)}
        placeholder="Ou cole uma URL de imagem..."
        className="mt-2 w-full border border-gray-300 rounded-[10px] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
    </div>
  );

  return (
    <div>
      {/* Cabeçalho */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Blog</h2>
          <p className="text-sm text-gray-500 mt-1">{posts.length} post{posts.length !== 1 ? "s" : ""} publicados</p>
        </div>
        {!creationMode && (
          <div className="flex gap-2">
            <button onClick={() => { setCreationMode("ia"); setMsg(null); setIaInput(""); setIaKeywords(""); }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2.5 rounded-[10px] font-semibold hover:from-purple-700 hover:to-indigo-700 transition text-sm">
              <Sparkles size={16} /> Gerar com IA
            </button>
            <button onClick={() => { setCreationMode("manual"); setForm(EMPTY_FORM); setMsg(null); }}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition text-sm">
              <PenLine size={16} /> Escrever Manual
            </button>
          </div>
        )}
        {creationMode && (
          <button onClick={() => { setCreationMode(null); setForm(EMPTY_FORM); setEditingId(null); setMsg(null); }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
            <X size={16} /> Cancelar
          </button>
        )}
      </div>

      {/* Aviso Claude */}
      {!claudeAvailable && (
        <div className="mb-4 px-4 py-3 rounded-[10px] bg-amber-50 border border-amber-200 text-amber-800 text-sm flex gap-2">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>Adicione <code className="bg-amber-100 px-1 rounded">ANTHROPIC_API_KEY</code> nas variáveis de ambiente da Vercel para ativar a geração automática.</span>
        </div>
      )}

      {/* Mensagem */}
      {msg && (
        <div className={`mb-4 px-4 py-3 rounded-[10px] text-sm font-medium flex items-center justify-between gap-4 ${msg.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
          <span>{msg.text}</span>
          {msg.link && (
            <a href={msg.link} target="_blank" rel="noopener noreferrer" className="underline font-bold shrink-0">
              Ver publicação →
            </a>
          )}
        </div>
      )}

      {/* MODO IA */}
      {creationMode === "ia" && (
        <div className="bg-white border border-gray-200 rounded-[10px] p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={20} className="text-purple-600" />
            <h3 className="text-lg font-bold text-gray-900">Gerar Artigo com IA</h3>
          </div>
          <p className="text-sm text-gray-500 mb-5">
            Cole a URL de um artigo/receita de referência, ou descreva um tema. O Claude escreve um blog completo com SEO/GEO de alta qualidade.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tema ou URL de Referência *</label>
              <div className="relative">
                <Link2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" value={iaInput} onChange={(e) => setIaInput(e.target.value)}
                  placeholder="Ex: 'alimentos para introdução alimentar de 6 meses' ou https://site.com/artigo"
                  className="w-full border border-gray-300 rounded-[10px] pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Palavras-chave SEO <span className="font-normal text-gray-400">(separadas por vírgula)</span>
              </label>
              <input type="text" value={iaKeywords} onChange={(e) => setIaKeywords(e.target.value)}
                placeholder="introdução alimentar, bebê 6 meses, papinha, BLW"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
            </div>
            <button onClick={handleGenerate} disabled={generating || !iaInput.trim()}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-[10px] font-semibold hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-60">
              <Sparkles size={16} />
              {generating ? "Gerando com Claude..." : "Gerar Artigo"}
            </button>
            {generating && <p className="text-xs text-purple-600 animate-pulse">Claude está escrevendo com SEO máximo, links internos, links externos e FAQ...</p>}
          </div>
        </div>
      )}

      {/* FORMULÁRIO (manual ou pós-IA) */}
      {creationMode === "manual" && (
        <div className="bg-white border border-gray-200 rounded-[10px] p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            {editingId ? `Editando: ${form.title.substring(0, 50)}` : "Novo Post"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Título */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Título (H1) * <span className="font-normal text-gray-400">máx 70 chars</span>
              </label>
              <input type="text" maxLength={70} value={form.title} onChange={(e) => setField("title", e.target.value)}
                placeholder="Título com a palavra-chave principal"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
              <p className="text-xs text-gray-400 mt-1">{form.title.length}/70</p>
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Slug <span className="font-normal text-gray-400">máx 70 chars, apenas letras e hifens</span>
              </label>
              <input type="text" maxLength={70} value={form.slug} onChange={(e) => setField("slug", e.target.value)}
                placeholder="slug-com-keyword"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
            </div>

            {/* Categoria */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Categoria</label>
              <select value={form.category} onChange={(e) => setField("category", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30">
                {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Meta description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Meta Description * <span className="font-normal text-gray-400">máx 140 chars, inclua a palavra-chave</span>
              </label>
              <textarea rows={2} maxLength={140} value={form.description} onChange={(e) => setField("description", e.target.value)}
                placeholder="Resumo com a palavra-chave para aparecer no Google..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none" />
              <p className="text-xs text-gray-400 mt-1">{form.description.length}/140</p>
            </div>

            {/* Keywords */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Keywords SEO <span className="font-normal text-gray-400">(vírgula)</span>
              </label>
              <input type="text" value={form.keywords} onChange={(e) => setField("keywords", e.target.value)}
                placeholder="keyword1, keyword2, keyword3"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
            </div>

            {/* Autor */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Autor</label>
              <input type="text" value={form.author} onChange={(e) => setField("author", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
            </div>

            {/* Imagens */}
            <div>
              <ImageUploadField label="Imagem de Capa" fieldKey="image" uploadFn={handleUploadCover}
                uploading={uploadingCover} inputRef={coverRef}
                note="(aparece no topo do post)" form={form} setField={setField} />
            </div>
            <div>
              <ImageUploadField label="Imagem do Conteúdo" fieldKey="image2" uploadFn={handleUploadImg2}
                uploading={uploadingImg2} inputRef={img2Ref}
                note="(aparece após 2º parágrafo)" form={form} setField={setField} />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Conteúdo (Markdown) *</label>
            <textarea rows={18} value={form.content} onChange={(e) => setField("content", e.target.value)}
              placeholder="Escreva em Markdown. ## Título H2, ### Título H3, **negrito**, - lista..."
              className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-y" />
            <p className="text-xs text-gray-400 mt-1">{form.content.split(/\s+/).filter(Boolean).length} palavras</p>
          </div>

          <div className="flex gap-3">
            <button onClick={handleSave} disabled={saving}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition disabled:opacity-60">
              <Save size={16} />
              {saving ? "Salvando..." : editingId ? "Salvar Alterações" : "Publicar Post"}
            </button>
            <button onClick={() => { setCreationMode(null); setForm(EMPTY_FORM); setEditingId(null); setMsg(null); }}
              className="px-6 py-2.5 rounded-[10px] border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de posts */}
      {!creationMode && (
        loading ? (
          <div className="text-center py-12 text-gray-400">Carregando...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-[10px]">
            Nenhum post publicado ainda.<br />
            <span className="text-sm">Use "Gerar com IA" para criar o primeiro artigo automaticamente.</span>
          </div>
        ) : (
          <div className="space-y-2">
            {posts.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 gap-2">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold shrink-0">{p.category}</span>
                    <span className="font-medium text-gray-900 truncate">{p.title}</span>
                    <span className="text-xs text-gray-400 shrink-0 hidden sm:inline">{p.date}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-2 shrink-0">
                    {/* Acessos */}
                    <span className="flex items-center gap-1 text-xs text-gray-400 shrink-0" title="Acessos">
                      <Eye size={13} />
                      {p.views ?? 0}
                    </span>
                    {/* Ver post */}
                    <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 border border-blue-200 hover:border-blue-400 px-2.5 py-1 rounded-[8px] transition shrink-0">
                      <ExternalLink size={13} />
                      Ver
                    </a>
                    {/* Editar */}
                    <button onClick={() => handleEdit(p)}
                      className="flex items-center gap-1 text-xs font-semibold text-[#FF6B6B] hover:text-[#ff5252] border border-[#FFD6D6] hover:border-[#FF6B6B] px-2.5 py-1 rounded-[8px] transition shrink-0">
                      <Pencil size={13} />
                      Editar
                    </button>
                    <button onClick={() => setExpandedId(expandedId === p.id ? null : p.id)} className="text-gray-400 hover:text-gray-700 transition">
                      {expandedId === p.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    <button onClick={() => handleDelete(p.id, p.title)} className="text-gray-400 hover:text-red-500 transition" title="Excluir">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                {expandedId === p.id && (
                  <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600 space-y-1">
                    <p><strong>Slug:</strong> /blog/{p.slug}</p>
                    <p><strong>Autor:</strong> {p.author} | <strong>Leitura:</strong> {p.readingTime}</p>
                    {p.description && <p><strong>Meta:</strong> {p.description}</p>}
                    {p.image && <img src={p.image} alt="capa" className="h-16 rounded-[6px] mt-2" />}
                  </div>
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

// Componente reutilizável de upload de imagem
function ImageUploadField({ label, fieldKey, uploadFn, uploading, inputRef, note, form, setField }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label} <span className="font-normal text-gray-400 text-xs">{note}</span>
      </label>
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-gray-300 rounded-[10px] p-4 cursor-pointer hover:border-[#FF6B6B] hover:bg-[#FFF5F5] transition min-h-[80px] flex items-center justify-center">
        {uploading ? (
          <p className="text-sm text-purple-600 animate-pulse">Enviando...</p>
        ) : form[fieldKey] ? (
          <div className="w-full">
            <img src={form[fieldKey]} alt="preview" className="h-20 w-full object-cover rounded-[8px] mb-1" />
            <p className="text-xs text-center text-green-600">Clique para trocar</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <ImageIcon size={24} />
            <p className="text-xs">Clique para fazer upload</p>
          </div>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => uploadFn(e.target.files?.[0])} />
      <input type="url" value={form[fieldKey]} onChange={(e) => setField(fieldKey, e.target.value)}
        placeholder="Ou cole uma URL..."
        className="mt-2 w-full border border-gray-300 rounded-[10px] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
    </div>
  );
}
