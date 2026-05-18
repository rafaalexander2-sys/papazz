import { useState, useEffect, useRef } from "react";
import { Trash2, ChevronDown, ChevronUp, Save, X, Link2, Sparkles, ImageIcon, Pencil, Search, FileText, CheckCircle2, Circle, Upload, FileUp } from "lucide-react";
import { getReceitasFromFirestore, addReceita, updateReceita, deleteReceita } from "../../services/firestoreService";
import { PAPINHAS_6_8 } from "../../data/seed-papinhas-6-8";
import { uploadImage } from "../../services/storageService";

const FASES = ["6-8", "8-10", "10-12", "12+"];
const TIPOS = [
  "Refeições Principais", "Sopas e Caldos", "Lanches", "Bebidas", "Sobremesas",
  "Lancheira Escolar", "Menu Disfarce", "Festinhas Saudáveis",
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
  const [mode, setMode] = useState("list"); // list | import | manual | texto | pdf
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [importing, setImporting] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [importInput, setImportInput] = useState("");
  const [importFase, setImportFase] = useState("6-8");
  const [seedando, setSeedando] = useState(false);
  const [showSeedConfirm, setShowSeedConfirm] = useState(false);
  const [textoDoc, setTextoDoc] = useState("");
  const [textoFase, setTextoFase] = useState("6-8");
  const [textoReceitas, setTextoReceitas] = useState([]);
  const [textoSelecionadas, setTextoSelecionadas] = useState([]);
  const [textoProcessando, setTextoProcessando] = useState(false);
  const [textoPublicando, setTextoPublicando] = useState(false);
  const [pdfReceitas, setPdfReceitas] = useState([]);
  const [pdfSelecionadas, setPdfSelecionadas] = useState([]);
  const [pdfProcessando, setPdfProcessando] = useState(false);
  const [pdfPublicando, setPdfPublicando] = useState(false);
  const [pdfProgresso, setPdfProgresso] = useState("");
  const pdfInputRef = useRef(null);

  const [expandedId, setExpandedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [faseFiltro, setFaseFiltro] = useState("Todas");
  const [tipoFiltro, setTipoFiltro] = useState("Todos");
  const [busca, setBusca] = useState("");
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

  async function handleSeed() {
    setSeedando(true);
    setShowSeedConfirm(false);
    setMsg(null);
    let ok = 0;
    for (const r of PAPINHAS_6_8) {
      try {
        await addReceita({
          ...r,
          tempo: parseInt(r.tempo) || 20,
        });
        ok++;
      } catch { /* continua */ }
    }
    setSeedando(false);
    setMsg({ type: "success", text: `${ok} receitas da fase 6-8 importadas com sucesso!` });
    await load();
  }

  async function handleTextoProcessar() {
    if (!textoDoc.trim()) { setMsg({ type: "error", text: "Cole o texto do documento primeiro." }); return; }
    setTextoProcessando(true);
    setTextoReceitas([]);
    setTextoSelecionadas([]);
    setMsg(null);
    try {
      const res = await fetch("/api/parse-text-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textoDoc, fase: textoFase }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setTextoReceitas(data.receitas);
      setTextoSelecionadas(data.receitas.map((_, i) => i));
      setMsg({ type: "success", text: `${data.receitas.length} receita${data.receitas.length !== 1 ? "s" : ""} encontrada${data.receitas.length !== 1 ? "s" : ""}. Revise e publique.` });
    } catch (e) {
      setMsg({ type: "error", text: "Erro ao processar: " + e.message });
    }
    setTextoProcessando(false);
  }

  function toggleTextoSelecionada(i) {
    setTextoSelecionadas((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  }

  async function handleTextoPublicar() {
    const selecionadas = textoReceitas.filter((_, i) => textoSelecionadas.includes(i));
    if (!selecionadas.length) { setMsg({ type: "error", text: "Selecione ao menos uma receita." }); return; }
    setTextoPublicando(true);
    setMsg(null);
    let ok = 0;
    for (const r of selecionadas) {
      try {
        await addReceita({
          ...r,
          ingredientes: Array.isArray(r.ingredientes) ? r.ingredientes : r.ingredientes.split("\n").map((s) => s.trim()).filter(Boolean),
          tags: Array.isArray(r.tags) ? r.tags : r.tags.split(",").map((s) => s.trim()).filter(Boolean),
          tempo: parseInt(r.tempo) || 20,
        });
        ok++;
      } catch { /* continua */ }
    }
    setTextoPublicando(false);
    setMsg({ type: "success", text: `${ok} receita${ok !== 1 ? "s" : ""} publicada${ok !== 1 ? "s" : ""}!` });
    setTextoDoc("");
    setTextoReceitas([]);
    setTextoSelecionadas([]);
    setMode("list");
    await load();
  }

  function handleEdit(r) {
    setEditingId(r.id);
    setForm({
      nome: r.nome || "",
      fase: r.fase || "6-8",
      tipo: r.tipo || "Refeições Principais",
      tempo: r.tempo || 20,
      dificuldade: r.dificuldade || "Fácil",
      premium: r.premium || false,
      ingredientes: Array.isArray(r.ingredientes) ? r.ingredientes.join("\n") : r.ingredientes || "",
      preparo: r.preparo || "",
      dicas: r.dicas || "",
      foto: r.foto || "",
      tags: Array.isArray(r.tags) ? r.tags.join(", ") : r.tags || "",
      restricoes: r.restricoes || [],
      nutrientes: r.nutrientes || EMPTY_FORM.nutrientes,
    });
    setMode("manual");
    setMsg(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handlePdfUpload(files) {
    if (!files?.length) return;
    const fileArr = Array.from(files);
    const MAX_MB = 3.2;
    const oversized = fileArr.filter((f) => f.size > MAX_MB * 1024 * 1024);
    if (oversized.length) {
      setMsg({ type: "error", text: `Arquivo(s) muito grande(s) (máx ${MAX_MB}MB): ${oversized.map((f) => f.name).join(", ")}` });
      return;
    }
    setPdfProcessando(true);
    setPdfReceitas([]);
    setPdfSelecionadas([]);
    setMsg(null);
    const todasReceitas = [];
    for (let i = 0; i < fileArr.length; i++) {
      const file = fileArr[i];
      setPdfProgresso(`Processando ${file.name} (${i + 1}/${fileArr.length})...`);
      try {
        const pdfBase64 = await fileToBase64(file);
        const res = await fetch("/api/upload-pdf-recipes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pdfBase64, fileName: file.name }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        todasReceitas.push(...data.receitas);
      } catch (e) {
        setMsg({ type: "error", text: `Erro em "${file.name}": ${e.message}` });
      }
    }
    setPdfProcessando(false);
    setPdfProgresso("");
    if (todasReceitas.length) {
      setPdfReceitas(todasReceitas);
      setPdfSelecionadas(todasReceitas.map((_, i) => i));
      setMsg({ type: "success", text: `${todasReceitas.length} receita${todasReceitas.length !== 1 ? "s" : ""} extraída${todasReceitas.length !== 1 ? "s" : ""}. Revise e publique.` });
    } else {
      setMsg({ type: "error", text: "Nenhuma receita encontrada nos PDFs enviados." });
    }
  }

  async function handlePdfPublicar() {
    const selecionadas = pdfReceitas.filter((_, i) => pdfSelecionadas.includes(i));
    if (!selecionadas.length) { setMsg({ type: "error", text: "Selecione ao menos uma receita." }); return; }
    setPdfPublicando(true);
    setMsg(null);
    let ok = 0;
    for (const r of selecionadas) {
      try {
        await addReceita({
          ...r,
          ingredientes: Array.isArray(r.ingredientes) ? r.ingredientes : r.ingredientes.split("\n").map((s) => s.trim()).filter(Boolean),
          tags: Array.isArray(r.tags) ? r.tags : r.tags.split(",").map((s) => s.trim()).filter(Boolean),
          tempo: parseInt(r.tempo) || 20,
        });
        ok++;
      } catch { /* continua */ }
    }
    setPdfPublicando(false);
    setMsg({ type: "success", text: `${ok} receita${ok !== 1 ? "s" : ""} publicada${ok !== 1 ? "s" : ""}!` });
    setPdfReceitas([]);
    setPdfSelecionadas([]);
    setMode("list");
    await load();
  }

  async function handleSave() {
    if (!form.nome.trim() || !form.preparo.trim()) { setMsg({ type: "error", text: "Nome e preparo são obrigatórios." }); return; }
    setSaving(true);
    try {
      const payload = {
        ...form,
        ingredientes: form.ingredientes.split("\n").map((s) => s.trim()).filter(Boolean),
        tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
        tempo: parseInt(form.tempo) || 20,
      };
      if (editingId) {
        await updateReceita(editingId, payload);
        setMsg({ type: "success", text: `"${form.nome}" atualizada!`, link: `/receitas?fase=${encodeURIComponent(form.fase)}&tipo=${encodeURIComponent(form.tipo)}` });
      } else {
        await addReceita(payload);
        setMsg({ type: "success", text: `"${form.nome}" publicada!`, link: `/receitas?fase=${encodeURIComponent(form.fase)}&tipo=${encodeURIComponent(form.tipo)}` });
      }
      setForm(EMPTY_FORM);
      setEditingId(null);
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

  const q = busca.trim().toLowerCase();
  const filtradas = receitas.filter((r) => {
    if (!q && faseFiltro !== "Todas" && r.fase !== faseFiltro) return false;
    if (!q && tipoFiltro !== "Todos" && r.tipo !== tipoFiltro) return false;
    if (q) {
      const hay = [r.nome, r.tipo, ...(Array.isArray(r.tags) ? r.tags : [])].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
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
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setShowSeedConfirm(true)} disabled={seedando}
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-orange-600 transition text-sm disabled:opacity-60">
              <Upload size={16} /> {seedando ? "Importando..." : "Papinhas 6-8m"}
            </button>
            <button onClick={() => { setMode("pdf"); setPdfReceitas([]); setPdfSelecionadas([]); setMsg(null); }}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-blue-700 transition text-sm">
              <FileUp size={16} /> Upload PDF
            </button>
            <button onClick={() => { setMode("texto"); setTextoReceitas([]); setTextoSelecionadas([]); setMsg(null); }}
              className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-teal-700 transition text-sm">
              <FileText size={16} /> Colar Documento
            </button>
            <button onClick={() => { setMode("import"); setMsg(null); }}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-purple-700 transition text-sm">
              <Link2 size={16} /> URL/Tema
            </button>
            <button onClick={() => { setMode("manual"); setForm(EMPTY_FORM); setEditingId(null); setMsg(null); }}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-4 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition text-sm">
              Nova Receita
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

      {/* Modal seed confirm */}
      {showSeedConfirm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-[10px] shadow-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Importar 28 papinhas 6-8m?</h3>
            <p className="text-sm text-gray-500 mb-5">
              Vai subir todas as receitas do documento: 16 salgadas e 12 doces, fase 6 a 8 meses.
              Receitas duplicadas serao adicionadas novamente.
            </p>
            <div className="flex gap-3">
              <button onClick={handleSeed}
                className="flex-1 bg-[#FF6B6B] text-white py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition text-sm">
                Importar tudo
              </button>
              <button onClick={() => setShowSeedConfirm(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-[10px] font-medium hover:bg-gray-50 transition text-sm">
                Cancelar
              </button>
            </div>
          </div>
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

      {/* MODO PDF */}
      {mode === "pdf" && (
        <div className="bg-white border border-gray-200 rounded-[10px] p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FileUp size={20} className="text-blue-600" />
            <h3 className="text-lg font-bold text-gray-900">Upload de PDFs em Massa</h3>
          </div>
          <p className="text-sm text-gray-500 mb-1">
            Envie um ou mais PDFs com receitas. O Claude extrai todas as receitas fielmente, sem alterar ingredientes ou modo de preparo, e detecta automaticamente a fase de idade e categoria.
          </p>
          <p className="text-xs text-gray-400 mb-5">Limite: 3,2 MB por arquivo. Imagens do PDF, quando presentes, sao reconhecidas mas devem ser adicionadas manualmente pelo campo de foto.</p>

          {pdfReceitas.length === 0 && (
            <>
              <label htmlFor="pdf-upload-input"
                className={`border-2 border-dashed rounded-[10px] p-10 text-center cursor-pointer transition block mb-4 ${pdfProcessando ? "border-blue-300 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"}`}>
                {pdfProcessando ? (
                  <div>
                    <p className="text-sm text-blue-600 font-semibold animate-pulse">{pdfProgresso || "Processando..."}</p>
                    <p className="text-xs text-blue-400 mt-1">Claude esta lendo os PDFs e extraindo as receitas...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <FileUp size={36} />
                    <p className="text-sm font-semibold text-gray-600">Clique para selecionar PDFs</p>
                    <p className="text-xs">Selecione um ou varios arquivos PDF</p>
                  </div>
                )}
              </label>
              <input
                id="pdf-upload-input"
                ref={pdfInputRef}
                type="file"
                accept=".pdf,application/pdf"
                multiple
                className="hidden"
                disabled={pdfProcessando}
                onChange={(e) => handlePdfUpload(e.target.files)}
              />
              {!pdfProcessando && (
                <button
                  onClick={() => pdfInputRef.current?.click()}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-blue-700 transition">
                  <FileUp size={16} /> Selecionar PDFs
                </button>
              )}
            </>
          )}

          {pdfReceitas.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-700">
                  {pdfReceitas.length} receita{pdfReceitas.length !== 1 ? "s" : ""} extraida{pdfReceitas.length !== 1 ? "s" : ""}.
                  Selecione as que deseja publicar:
                </p>
                <button onClick={() => setPdfSelecionadas(
                  pdfSelecionadas.length === pdfReceitas.length ? [] : pdfReceitas.map((_, i) => i)
                )} className="text-xs text-blue-600 font-medium underline">
                  {pdfSelecionadas.length === pdfReceitas.length ? "Desmarcar todas" : "Selecionar todas"}
                </button>
              </div>
              <div className="space-y-2 mb-5 max-h-96 overflow-y-auto pr-1">
                {pdfReceitas.map((r, i) => (
                  <button key={i} type="button" onClick={() => setPdfSelecionadas((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])}
                    className={`w-full text-left flex items-start gap-3 p-3 rounded-[10px] border transition ${pdfSelecionadas.includes(i) ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                    {pdfSelecionadas.includes(i)
                      ? <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                      : <Circle size={18} className="text-gray-300 shrink-0 mt-0.5" />}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-gray-900 text-sm truncate">{r.nome}</p>
                        {r.temImagem && <span className="text-xs px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded font-medium shrink-0">tem imagem no PDF</span>}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {r.fase}m | {r.tipo} | {r.tempo}min | {r.dificuldade}
                        {Array.isArray(r.restricoes) && r.restricoes.length > 0 && ` | ${r.restricoes.join(", ")}`}
                      </p>
                      {Array.isArray(r.ingredientes) && (
                        <p className="text-xs text-gray-400 mt-1 line-clamp-1">{r.ingredientes.join(", ")}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <button onClick={handlePdfPublicar} disabled={pdfPublicando || pdfSelecionadas.length === 0}
                  className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition disabled:opacity-60">
                  <Save size={16} />
                  {pdfPublicando ? "Publicando..." : `Publicar ${pdfSelecionadas.length} receita${pdfSelecionadas.length !== 1 ? "s" : ""}`}
                </button>
                <button onClick={() => { setPdfReceitas([]); setPdfSelecionadas([]); setMsg(null); if (pdfInputRef.current) pdfInputRef.current.value = ""; }}
                  className="px-5 py-2.5 rounded-[10px] border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition text-sm">
                  Enviar outros PDFs
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODO TEXTO */}
      {mode === "texto" && (
        <div className="bg-white border border-gray-200 rounded-[10px] p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={20} className="text-teal-600" />
            <h3 className="text-lg font-bold text-gray-900">Importar do Documento</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Cole o texto do seu documento aqui. O Claude vai identificar todas as receitas automaticamente.
          </p>

          {textoReceitas.length === 0 && (
            <>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div className="md:col-span-3">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Texto do Documento</label>
                  <textarea
                    rows={10}
                    value={textoDoc}
                    onChange={(e) => setTextoDoc(e.target.value)}
                    placeholder={"Cole aqui o conteudo do seu documento com as receitas..."}
                    className="w-full border border-gray-300 rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Fase padrao</label>
                  <select value={textoFase} onChange={(e) => setTextoFase(e.target.value)}
                    className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300">
                    {FASES.map((f) => <option key={f} value={f}>{f} meses</option>)}
                  </select>
                  <p className="text-xs text-gray-400 mt-2">Usada quando o doc nao especifica a fase.</p>
                </div>
              </div>
              <button onClick={handleTextoProcessar} disabled={textoProcessando || !textoDoc.trim()}
                className="flex items-center gap-2 bg-teal-600 text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-teal-700 transition disabled:opacity-60">
                <Sparkles size={16} />
                {textoProcessando ? "Processando com Claude..." : "Extrair Receitas"}
              </button>
              {textoProcessando && <p className="text-xs text-teal-600 mt-2 animate-pulse">Claude esta lendo e extraindo as receitas do texto...</p>}
            </>
          )}

          {textoReceitas.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-700">
                  {textoReceitas.length} receita{textoReceitas.length !== 1 ? "s" : ""} encontrada{textoReceitas.length !== 1 ? "s" : ""}.
                  Selecione as que deseja publicar:
                </p>
                <button onClick={() => setTextoSelecionadas(
                  textoSelecionadas.length === textoReceitas.length ? [] : textoReceitas.map((_, i) => i)
                )} className="text-xs text-teal-600 font-medium underline">
                  {textoSelecionadas.length === textoReceitas.length ? "Desmarcar todas" : "Selecionar todas"}
                </button>
              </div>
              <div className="space-y-2 mb-5 max-h-96 overflow-y-auto pr-1">
                {textoReceitas.map((r, i) => (
                  <button key={i} type="button" onClick={() => toggleTextoSelecionada(i)}
                    className={`w-full text-left flex items-start gap-3 p-3 rounded-[10px] border transition ${textoSelecionadas.includes(i) ? "border-teal-400 bg-teal-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                    {textoSelecionadas.includes(i)
                      ? <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-0.5" />
                      : <Circle size={18} className="text-gray-300 shrink-0 mt-0.5" />}
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{r.nome}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {r.fase}m | {r.tipo} | {r.tempo}min | {r.dificuldade}
                        {Array.isArray(r.restricoes) && r.restricoes.length > 0 && ` | ${r.restricoes.join(", ")}`}
                      </p>
                      {Array.isArray(r.ingredientes) && (
                        <p className="text-xs text-gray-400 mt-1 line-clamp-1">{r.ingredientes.join(", ")}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={handleTextoPublicar} disabled={textoPublicando || textoSelecionadas.length === 0}
                  className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition disabled:opacity-60">
                  <Save size={16} />
                  {textoPublicando ? "Publicando..." : `Publicar ${textoSelecionadas.length} receita${textoSelecionadas.length !== 1 ? "s" : ""}`}
                </button>
                <button onClick={() => { setTextoReceitas([]); setTextoSelecionadas([]); setMsg(null); }}
                  className="px-5 py-2.5 rounded-[10px] border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition text-sm">
                  Voltar ao texto
                </button>
              </div>
            </div>
          )}
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
        <div className="bg-white border border-gray-200 rounded-[10px] p-4 md:p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            {editingId ? `Editando: ${form.nome}` : "Nova Receita"}
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
                  <label htmlFor="receita-foto-upload"
                    className="border-2 border-dashed border-gray-300 rounded-[10px] p-6 text-center cursor-pointer hover:border-[#FF6B6B] hover:bg-[#FFF5F5] transition block">
                    {uploadingImg ? (
                      <p className="text-sm text-purple-600 animate-pulse">Enviando imagem...</p>
                    ) : form.foto ? (
                      <div>
                        <img src={form.foto} alt="preview" className="h-24 w-full object-cover rounded-[8px] mb-2" />
                        <p className="text-xs text-green-600 font-medium">Toque para trocar a foto.</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-gray-400">
                        <ImageIcon size={32} />
                        <p className="text-sm">Toque para upload ou tirar foto</p>
                        <p className="text-xs">JPG, PNG ou WebP — máx 5MB</p>
                      </div>
                    )}
                  </label>
                  <input id="receita-foto-upload" ref={fileInputRef} type="file" accept="image/*" className="hidden"
                    onChange={(e) => handleImageUpload(e.target.files?.[0])} />
                </div>
              </div>
              <div className="mt-2">
                <input type="url" value={form.foto} onChange={(e) => setField("foto", e.target.value)}
                  placeholder="Ou cole uma URL de imagem..."
                  className="w-full border border-gray-300 rounded-[10px] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
              </div>
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
              {saving ? "Salvando..." : editingId ? "Salvar Alterações" : "Publicar Receita"}
            </button>
            <button onClick={() => { setMode("list"); setForm(EMPTY_FORM); setEditingId(null); setMsg(null); }}
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
          <div className="flex gap-3 mb-4 flex-wrap items-center">
            <select value={faseFiltro} onChange={(e) => { setFaseFiltro(e.target.value); setBusca(""); }}
              className="border border-gray-200 rounded-[10px] px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30">
              <option value="Todas">Todas as fases</option>
              {FASES.map((f) => <option key={f} value={f}>{f} meses</option>)}
            </select>
            <select value={tipoFiltro} onChange={(e) => { setTipoFiltro(e.target.value); setBusca(""); }}
              className="border border-gray-200 rounded-[10px] px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30">
              <option value="Todos">Todas as categorias</option>
              {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <div className="relative flex-1 min-w-[200px]">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6B6B] pointer-events-none" />
              <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar receita..."
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-[10px] text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30" />
            </div>
            <span className="text-xs text-gray-400 shrink-0">{filtradas.length} receita{filtradas.length !== 1 ? "s" : ""}</span>
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
                      <button onClick={() => handleEdit(r)} className="text-gray-400 hover:text-[#FF6B6B] transition" title="Editar">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => setExpandedId(expandedId === r.id ? null : r.id)} className="text-gray-400 hover:text-gray-700 transition">
                        {expandedId === r.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      <button onClick={() => handleDelete(r.id, r.nome)} className="text-gray-400 hover:text-red-500 transition" title="Excluir">
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
