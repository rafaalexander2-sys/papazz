import { useState, useEffect } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, Save, X } from "lucide-react";
import {
  getReceitasFromFirestore,
  addReceita,
  deleteReceita,
} from "../../services/firestoreService";

const FASES = ["6-8", "8-10", "10-12", "12+"];
const CATEGORIAS = ["Vegetais", "Frutas", "Proteínas", "Cereais", "Leguminosas", "Misto"];
const DIFICULDADES = ["Fácil", "Médio", "Difícil"];

const EMPTY_FORM = {
  nome: "",
  fase: "6-8",
  categoria: "Vegetais",
  tempo: 20,
  dificuldade: "Fácil",
  premium: false,
  ingredientes: "",
  preparo: "",
  dicas: "",
  foto: "",
  tags: "",
  nutrientes: { calorias: 0, proteina: 0, carboidratos: 0, gordura: 0, ferro: 0, calcio: 0 },
};

export default function AdminReceitas() {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [faseFiltro, setFaseFiltro] = useState("Todas");
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const data = await getReceitasFromFirestore();
    setReceitas(data);
    setLoading(false);
  }

  function setField(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function setNutriente(key, value) {
    setForm((f) => ({
      ...f,
      nutrientes: { ...f.nutrientes, [key]: parseFloat(value) || 0 },
    }));
  }

  async function handleSave() {
    if (!form.nome.trim() || !form.preparo.trim()) {
      setMsg({ type: "error", text: "Nome e preparo são obrigatórios." });
      return;
    }
    setSaving(true);
    try {
      const nextId = Date.now();
      await addReceita({
        ...form,
        id: nextId,
        ingredientes: form.ingredientes
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        tags: form.tags
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        tempo: parseInt(form.tempo) || 20,
      });
      setMsg({ type: "success", text: `Receita "${form.nome}" publicada!` });
      setForm(EMPTY_FORM);
      setShowForm(false);
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

  const filtradas =
    faseFiltro === "Todas"
      ? receitas
      : receitas.filter((r) => r.fase === faseFiltro);

  return (
    <div>
      {/* Cabeçalho */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Receitas</h2>
          <p className="text-sm text-gray-500 mt-1">
            {receitas.length} receita{receitas.length !== 1 ? "s" : ""} no Firestore
          </p>
        </div>
        <button
          onClick={() => { setShowForm(true); setMsg(null); }}
          className="flex items-center gap-2 bg-[#FF6B6B] text-white px-5 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition"
        >
          <Plus size={18} />
          Nova Receita
        </button>
      </div>

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
            <h3 className="text-lg font-bold text-gray-900">Nova Receita</h3>
            <button onClick={() => setShowForm(false)}>
              <X size={20} className="text-gray-400 hover:text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Nome */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nome da Receita *
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setField("nome", e.target.value)}
                placeholder="Ex: Papinha de Abóbora com Frango"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>

            {/* Fase */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Fase de Idade *
              </label>
              <select
                value={form.fase}
                onChange={(e) => setField("fase", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              >
                {FASES.map((f) => (
                  <option key={f} value={f}>
                    {f} meses
                  </option>
                ))}
              </select>
            </div>

            {/* Categoria */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Categoria
              </label>
              <select
                value={form.categoria}
                onChange={(e) => setField("categoria", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              >
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Tempo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tempo de Preparo (minutos)
              </label>
              <input
                type="number"
                min={5}
                max={120}
                value={form.tempo}
                onChange={(e) => setField("tempo", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>

            {/* Dificuldade */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Dificuldade
              </label>
              <select
                value={form.dificuldade}
                onChange={(e) => setField("dificuldade", e.target.value)}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              >
                {DIFICULDADES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Premium toggle */}
            <div className="md:col-span-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setField("premium", !form.premium)}
                className={`relative w-11 h-6 rounded-full transition ${
                  form.premium ? "bg-[#FF6B6B]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    form.premium ? "translate-x-5" : ""
                  }`}
                />
              </button>
              <span className="text-sm font-medium text-gray-700">
                Receita Premium{" "}
                <span className="text-gray-400 font-normal">
                  (desabilitado = gratuita)
                </span>
              </span>
            </div>

            {/* Ingredientes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ingredientes{" "}
                <span className="font-normal text-gray-400">
                  (um por linha)
                </span>
              </label>
              <textarea
                rows={4}
                value={form.ingredientes}
                onChange={(e) => setField("ingredientes", e.target.value)}
                placeholder={"200g de batata-doce\n200ml de água filtrada"}
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none"
              />
            </div>

            {/* Preparo */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Modo de Preparo *
              </label>
              <textarea
                rows={5}
                value={form.preparo}
                onChange={(e) => setField("preparo", e.target.value)}
                placeholder="Descreva o passo a passo do preparo..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none"
              />
            </div>

            {/* Dicas */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Dicas Nutricionais
              </label>
              <textarea
                rows={3}
                value={form.dicas}
                onChange={(e) => setField("dicas", e.target.value)}
                placeholder="Informações sobre os benefícios nutricionais..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 resize-none"
              />
            </div>

            {/* Foto URL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                URL da Foto{" "}
                <span className="font-normal text-gray-400">(opcional)</span>
              </label>
              <input
                type="url"
                value={form.foto}
                onChange={(e) => setField("foto", e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tags{" "}
                <span className="font-normal text-gray-400">
                  (separadas por vírgula)
                </span>
              </label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => setField("tags", e.target.value)}
                placeholder="vegetais, fácil digestão, vitamina A"
                className="w-full border border-gray-300 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
              />
            </div>
          </div>

          {/* Nutrientes */}
          <div className="border-t border-gray-100 pt-4 mt-2 mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Informações Nutricionais{" "}
              <span className="font-normal text-gray-400">
                (por porção)
              </span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { key: "calorias", label: "Calorias (kcal)" },
                { key: "proteina", label: "Proteína (g)" },
                { key: "carboidratos", label: "Carboidratos (g)" },
                { key: "gordura", label: "Gordura (g)" },
                { key: "ferro", label: "Ferro (mg)" },
                { key: "calcio", label: "Cálcio (mg)" },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="block text-xs text-gray-600 mb-1">
                    {label}
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={form.nutrientes[key]}
                    onChange={(e) => setNutriente(key, e.target.value)}
                    className="w-full border border-gray-300 rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#ff5252] transition disabled:opacity-60"
            >
              <Save size={16} />
              {saving ? "Publicando..." : "Publicar Receita"}
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

      {/* Filtro por fase */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {["Todas", ...FASES].map((f) => (
          <button
            key={f}
            onClick={() => setFaseFiltro(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              faseFiltro === f
                ? "bg-[#FF6B6B] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f === "Todas" ? "Todas" : `${f} meses`}
          </button>
        ))}
      </div>

      {/* Lista */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Carregando...</div>
      ) : filtradas.length === 0 ? (
        <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-[10px]">
          Nenhuma receita no Firestore para esta fase.
          <br />
          <span className="text-sm">
            Receitas estáticas continuam no site normalmente.
          </span>
        </div>
      ) : (
        <div className="space-y-2">
          {filtradas.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-gray-200 rounded-[10px] overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-semibold shrink-0">
                    {r.fase}m
                  </span>
                  {r.premium && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold shrink-0">
                      Premium
                    </span>
                  )}
                  <span className="font-medium text-gray-900 truncate">
                    {r.nome}
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === r.id ? null : r.id)
                    }
                    className="text-gray-400 hover:text-gray-700 transition"
                  >
                    {expandedId === r.id ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(r.id, r.nome)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              {expandedId === r.id && (
                <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Categoria:</strong> {r.categoria} |{" "}
                    <strong>Tempo:</strong> {r.tempo}min |{" "}
                    <strong>Dificuldade:</strong> {r.dificuldade}
                  </p>
                  {r.ingredientes?.length > 0 && (
                    <p>
                      <strong>Ingredientes:</strong>{" "}
                      {Array.isArray(r.ingredientes)
                        ? r.ingredientes.join(", ")
                        : r.ingredientes}
                    </p>
                  )}
                  <p className="line-clamp-3">
                    <strong>Preparo:</strong> {r.preparo}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
