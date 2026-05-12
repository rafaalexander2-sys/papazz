import { useState, useEffect, useRef } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, Save, X, Link2, Sparkles, Upload, ImageIcon } from "lucide-react";
import { getReceitasFromFirestore, addReceita, deleteReceita } from "../../services/firestoreService";
import { uploadImage } from "../../services/storageService";

const FASES = ["6-8", "8-10", "10-12", "12+"];
const TIPOS = [
  "Refeições Principais", "Sopas e Caldos", "Lanches", "Bebidas", "Sobremesas",
  "Lancheira Escolar", "Receitas de 15 Minutos", "Menu Disfarce", "Festinhas Saudáveis", "Ideias Extras",
];
const RESTRICOES_LIST = ["Sem Glúten", "Sem Lactose", "Sem Ovo"];
const DIFICULDADES = ["Fácil", "Médio", "Difícil"];

const EMPTY_FORM = {
  nome: "", fase: "6-8", tipo: "Refeições Principais", tempo: 20,
  dificuldade: "Fácil", premium: false,
  ingredientes: "", preparo: "", dicas: "", foto: "", tags: "",
  restricoes: [],
  nutrientes: { calorias: 0, proteina: 0, carboidratos: 0, gordura: 0, ferro: 0, calcio: 0 },
};

export default function AdminReceitas() {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("list"); // list | import | manual
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [importing, setImporting] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [importInput, setImportInput] = useState("");
  const [importFase, setImportFase] = useState("6-8");
  const [expandedId, setExpandedId] = useState(null);
  const [faseFiltro, setFaseFiltro] = useState("Todas");
  const [tipoFiltro, setTipoFiltro] = useState("Todos");
  const [msg, setMsg] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    setReceitas(await getReceitasFromFirestore());
    setLoading(false);
  }

  function setField(field, value) { setForm((f) => ({ ...f, [field]: value })); }
  function setNutriente(key, value) { setForm((f) => ({ ...f, nutrientes: { ...f.nutrientes, [key]: parseFloat(value) || 0 } })); }

  function toggleRestricao(r) {
    setForm((f) => ({
      ...f,
      restricoes: f.restricoes.includes(r) ? f.restricoes.filter((x) => x !== r) : [...f.restricoes, r],
    }));
  }

  async function handleImageUpload(file) {
    if (!file) return;
    setUploadingImg(true);
    try {
      const url = await uploadImage(file, "receitas");
      setField("foto", url);
      setMsg({ type: "success", text: "Imagem enviada com sucesso!" });
    } catch (e) {
      setMsg({ type: "error", text: "Erro no upload: " + e.message });
    }
    setUploadingImg(false);
  }

  async function handleImport() {
    if (!importInput.trim()) { setMsg({ type: "error", text: "Digite uma URL ou tema." }); return; }
    setImporting(true);
    setMsg(null);
    try {
      const res = await fetch("/api/import-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: importInput.trim(), fase: importFase }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setForm({
        nome: data.nome || "",
        fase: data.fase || importFase,
        tipo: data.tipo || "Refeições Principais",
        tempo: data.tempo || 20,
        dificuldade: data.dificuldade || "Fácil",
        premium: data.premium || false,
        ingredientes: Array.isArray(data.ingredientes) ? data.ingredientes.join("\n") : data.ingredientes || "",
        preparo: data.preparo || "",
        dicas: data.dicas || "",
        foto: data.foto || "",
        tags: Array.isArray(data.tags) ? data.tags.join(", ") : data.tags || "",
        restricoes: Array.isArray(data.restricoes) ? data.restricoes : [],
        nutrientes: data.nutrientes || EMPTY_FORM.nutrientes,
      });
      setMode("manual");
      setMsg({ type: "success", text: "Receita importada! Revise e publique." });
    } catch (e) {
      setMsg({ type: "error", text: "Erro ao importar: " + e.message });
    }
    setImporting(false);
  }

  async function handleSave() {
    if (!form.nome.trim() || !form.preparo.trim()) { setMsg({ type: "error", text: "Nome e preparo são obrigatórios." }); return; }
    setSaving(true);
    try {
      await addReceita({
        ...form,
        id: Date.now(),
        ingredientes: form.ingredientes.split("\n").map((s) => s.trim()).filter(Boolean),
        tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
        tempo: parseInt(form.tempo) || 20,
      });
      setMsg({ type: "success", text: `"${form.nome}" publicada!` });
      setForm(EMPTY_FORM);
      setMode("list");
      await load();
    } catch (e) {
      setMsg({ type: "error", text: "Erro ao salvar: " + e.message });
    }
    setSaving(false);
  }

  async function handleDelete(id, nome) {
    if (!confirm(`Excluir "${nome}"?`)) return;
    await deleteReceita(id);
    setMsg({ type: "success", text: `"${nome}" excluída.` });
    await load();
  }

  const filtradas = receitas.filter((r) => {
    if (faseFiltro !== "Todas" && r.fase !== faseFiltro) return false;
    if (tipoFiltro !== "Todos" && r.tipo !== tipoFiltro) return false;
    return true;
  });

  return (
    <div>
      {/* Cabeçalho */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Receitas</h2>
          <p className="text-sm text-gray-500 mt-1">{receitas.length} receita{receitas.length !== 1 ? "s" : ""} no banco</p>
        </div>
        {mode === "list" && (
          <div className="flex gap-2">
            <button onClick={() => { setMode("import"); setMsg(null); }}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-purple-700 transition text-sm">
              <Link2 size={16} /> Importar via URL/Tema
            </button>
            <button onClick={() => { setMode("manual"); setForm(EMPTY_FORM); setMsg(null); }}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition text-sm">
              <Plus size={16} /> Nova Receita
            </button>
          </div>
        )}
        {mode !== "list" && (
          <button onClick={() => { setMode("list"); setMsg(null); }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
            <X size={16} /> Cancelar
          </button>
        )}
      </div>

      {/* Mensagem */}
      {msg && (
        <div className={`mb-4 px-4 py-3 rounded-[10px] text-sm font-medium ${msg.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
          {msg.text}
        </div>
      )}

      {/* MODO IMPORT */}
      {mode === "import" && (
        <div className="bg-white border border-gray-200 rounded-[10px] p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={20} className="text-purple-600" />
            <h3 className="text-lg font-bold text-gray-900">Importar via URL ou Tema</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Cole uma URL de receita (ex: tuasaude.com/receita-xyz) ou descreva um tema (ex: "sopa de legumes para 8 meses") e o Claude cria automaticamente.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">URL ou Tema</label>
              <input type="text" value={importInput} onChange={(e) => setImportInput(e.target.value)}
                placeholder="https://site.com/receita ou 'papinha de abóbora com frango'"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Fase</label>
              <select value={importFase} onChange={(e) => setImportFase(e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300">
                {FASES.map((f) => <option key={f} value={f}>{f} meses</option>)}
              </select>
            </div>
          </div>
          <button onClick={handleImport} disabled={importing || !importInput.trim()}
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-purple-700 transition disabled:opacity-60">
            <Sparkles size={16} />
            {importing ? "Importando com Claude..." : "Importar com Claude"}
          </button>
          {importing && <p className="text-xs text-purple-600 mt-2 animate-pulse">Claude está extraindo e adaptando a receita...</p>}
        </div>
      )}

      {/* FORMULÁRIO MANUAL */}
      {mode === "manual" && (
        <div className="bg-white border border-gray-200 rounded-[10px] p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            {form.nome ? `Editando: ${form.nome}` : "Nova Receita"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Nome */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nome da Receita *</label>
              <input type="text" value={form.nome} onChange={(e) => setField("nome", e.target.value)}
                placeholder="Ex: Papinha de Abóbora com Frango"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
            </div>

            {/* Fase */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Fase de Idade *</label>
              <select value={form.fase} onChange={(e) => setField("fase", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30">
                {FASES.map((f) => <option key={f} value={f}>{f} meses</option>)}
              </select>
            </div>

            {/* Tipo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Categoria *</label>
              <select value={form.tipo} onChange={(e) => setField("tipo", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30">
                {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Tempo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tempo (minutos)</label>
              <input type="number" min={5} max={120} value={form.tempo} onChange={(e) => setField("tempo", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
            </div>

            {/* Dificuldade */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Dificuldade</label>
              <select value={form.dificuldade} onChange={(e) => setField("dificuldade", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30">
                {DIFICULDADES.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            {/* Premium toggle */}
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="button" onClick={() => setField("premium", !form.premium)}
                className={`relative w-11 h-6 rounded-full transition ${form.premium ? "bg-[#FF6B6B]" : "bg-gray-300"}`}>
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${form.premium ? "translate-x-5" : ""}`} />
              </button>
              <span className="text-sm font-medium text-gray-700">
                Receita Premium <span className="text-gray-400 font-normal">(desabilitado = gratuita)</span>
              </span>
            </div>

            {/* Restrições */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Restrições Alimentares</label>
              <div className="flex gap-3 flex-wrap">
                {RESTRICOES_LIST.map((r) => (
                  <button key={r} type="button" onClick={() => toggleRestricao(r)}
                    className={`px-4 py-2 rounded-[10px] text-sm font-medium border transition ${form.restricoes.includes(r) ? "bg-green-500 text-white border-green-500" : "bg-white text-gray-600 border-gray-300 hover:border-green-400"}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Upload de Imagem */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Foto da Receita</label>
              <div className="flex gap-3 items-start">
                <div className="flex-1">
                  <div onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-300 rounded-[10px] p-6 text-center cursor-pointer hover:border-[#FF6B6B] hover:bg-[#FFF5F5] transition">
                    {uploadingImg ? (
                      <p className="text-sm text-purple-600 animate-pulse">Enviando imagem...</p>
                    ) : form.foto ? (
                      <div>
                        <img src={form.foto} alt="preview" className="h-24 w-full object-cover rounded-[8px] mb-2" />
                        <p className="text-xs text-green-600 font-medium">Imagem carregada. Clique para trocar.</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-gray-400">
                        <ImageIcon size={32} />
                        <p className="text-sm">Clique para fazer upload da foto</p>
                        <p className="text-xs">JPG, PNG ou WebP — máx 5MB</p>
                      </div>
                    )}
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden"
                    onChange={(e) => handleImageUpload(e.target.files?.[0])} />
                </div>
                {form.foto && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-500 font-semibold">Ou cole URL:</p>
                    <input type="url" value={form.foto} onChange={(e) => setField("foto", e.target.value)}
                      placeholder="https://..."
                      className="w-48 border border-gray-300 rounded-[10px] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
                  </div>
                )}
              </div>
              {!form.foto && (
                <div className="mt-2">
                  <p className="text-xs text-gray-500 mb-1">Ou cole uma URL de imagem:</p>
                  <input type="url" value={form.foto} onChange={(e) => setField("foto", e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full border border-gray-300 rounded-[10px] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
                </div>
              )}
            </div>

            {/* Ingredientes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ingredientes * <span className="font-normal text-gray-400">(um por linha)</span>
              </label>
              <textarea rows={4} value={form.ingredientes} onChange={(e) => setField("ingredientes", e.target.value)}
                placeholder={"200g de batata-doce\n200ml de água filtrada"}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none" />
            </div>

            {/* Preparo */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Modo de Preparo *</label>
              <textarea rows={5} value={form.preparo} onChange={(e) => setField("preparo", e.target.value)}
                placeholder="Descreva o passo a passo..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none" />
            </div>

            {/* Dicas */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Dicas Nutricionais</label>
              <textarea rows={3} value={form.dicas} onChange={(e) => setField("dicas", e.target.value)}
                placeholder="Benefícios e dicas para os pais..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none" />
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tags <span className="font-normal text-gray-400">(separadas por vírgula)</span>
              </label>
              <input type="text" value={form.tags} onChange={(e) => setField("tags", e.target.value)}
                placeholder="fácil, rápido, vitamina A"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
            </div>
          </div>

          {/* Nutrientes */}
          <div className="border-t border-gray-100 pt-4 mt-2 mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Informações Nutricionais <span className="font-normal text-gray-400">(por porção)</span></p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { key: "calorias", label: "Calorias (kcal)" }, { key: "proteina", label: "Proteína (g)" },
                { key: "carboidratos", label: "Carboidratos (g)" }, { key: "gordura", label: "Gordura (g)" },
                { key: "ferro", label: "Ferro (mg)" }, { key: "calcio", label: "Cálcio (mg)" },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="block text-xs text-gray-600 mb-1">{label}</label>
                  <input type="number" min={0} step={0.1} value={form.nutrientes[key]}
                    onChange={(e) => setNutriente(key, e.target.value)}
                    className="w-full border border-gray-300 rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={handleSave} disabled={saving}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition disabled:opacity-60">
              <Save size={16} />
              {saving ? "Publicando..." : "Publicar Receita"}
            </button>
            <button onClick={() => { setMode("list"); setForm(EMPTY_FORM); }}
              className="px-6 py-2.5 rounded-[10px] border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* LISTA */}
      {mode === "list" && (
        <>
          {/* Filtros */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {["Todas", ...FASES].map((f) => (
              <button key={f} onClick={() => setFaseFiltro(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${faseFiltro === f ? "bg-[#FF6B6B] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {f === "Todas" ? "Todas as fases" : `${f} meses`}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-4 flex-wrap">
            {["Todos", ...TIPOS].map((t) => (
              <button key={t} onClick={() => setTipoFiltro(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${tipoFiltro === t ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {t}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-400">Carregando...</div>
          ) : filtradas.length === 0 ? (
            <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-[10px]">
              Nenhuma receita encontrada.<br />
              <span className="text-sm">Adicione pelo botão "Nova Receita" ou "Importar via URL/Tema".</span>
            </div>
          ) : (
            <div className="space-y-2">
              {filtradas.map((r) => (
                <div key={r.id} className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-semibold shrink-0">{r.fase}m</span>
                      {r.tipo && <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-semibold shrink-0 hidden sm:inline">{r.tipo}</span>}
                      {r.premium && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold shrink-0">Premium</span>}
                      <span className="font-medium text-gray-900 truncate">{r.nome}</span>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <button onClick={() => setExpandedId(expandedId === r.id ? null : r.id)} className="text-gray-400 hover:text-gray-700 transition">
                        {expandedId === r.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      <button onClick={() => handleDelete(r.id, r.nome)} className="text-gray-400 hover:text-red-500 transition">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  {expandedId === r.id && (
                    <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600 space-y-2 flex gap-4">
                      {r.foto && <img src={r.foto} alt={r.nome} className="w-20 h-20 object-cover rounded-[8px] shrink-0" />}
                      <div className="space-y-1">
                        <p><strong>Categoria:</strong> {r.tipo} | <strong>Tempo:</strong> {r.tempo}min | <strong>Dificuldade:</strong> {r.dificuldade}</p>
                        {Array.isArray(r.restricoes) && r.restricoes.length > 0 && <p><strong>Restrições:</strong> {r.restricoes.join(", ")}</p>}
                        {Array.isArray(r.ingredientes) && <p><strong>Ingredientes:</strong> {r.ingredientes.join(", ")}</p>}
                        <p className="line-clamp-2"><strong>Preparo:</strong> {r.preparo}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
