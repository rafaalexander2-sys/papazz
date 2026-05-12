import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useListaCompras } from "../context/ListaComprasContext";
import { usePlanejamento } from "../context/PlanejamentoContext";
import { getReceitasFromFirestore } from "../services/firestoreService";
import ModalUpgrade from "../components/premium/ModalUpgrade";

export const TIPOS_RECEITA = [
  "Refeições Principais",
  "Sopas e Caldos",
  "Lanches",
  "Bebidas",
  "Sobremesas",
  "Lancheira Escolar",
  "Receitas de 15 Minutos",
  "Menu Disfarce",
  "Festinhas Saudáveis",
  "Ideias Extras",
];

export const RESTRICOES_LIST = ["Sem Glúten", "Sem Lactose", "Sem Ovo"];

const FASES = [
  { id: "6-8", nome: "6-8 meses", cor: "#FFB5A7", emoji: "🍼" },
  { id: "8-10", nome: "8-10 meses", cor: "#FFCC7A", emoji: "🥄" },
  { id: "10-12", nome: "10-12 meses", cor: "#B5E7DD", emoji: "🍽️" },
  { id: "12+", nome: "12+ meses", cor: "#A7D8C9", emoji: "🍴" },
];

const TIPO_ICONS = {
  "Refeições Principais": "🍲",
  "Sopas e Caldos": "🥣",
  Lanches: "🥪",
  Bebidas: "🥤",
  Sobremesas: "🍮",
  "Lancheira Escolar": "🎒",
  "Receitas de 15 Minutos": "⏱️",
  "Menu Disfarce": "🥦",
  "Festinhas Saudáveis": "🎉",
  "Ideias Extras": "💡",
};

export default function Receitas() {
  const { isPremium } = useAuth();
  const [faseSelecionada, setFaseSelecionada] = useState("6-8");
  const [tipoSelecionado, setTipoSelecionado] = useState("Todas");
  const [restricoesFiltro, setRestricoesFiltro] = useState([]);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);
  const [mostrarUpgrade, setMostrarUpgrade] = useState(false);
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReceitasFromFirestore().then((data) => {
      setReceitas(data);
      setLoading(false);
    });
  }, []);

  const toggleRestricao = (r) =>
    setRestricoesFiltro((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    );

  const receitasFiltradas = receitas.filter((r) => {
    if (r.fase !== faseSelecionada) return false;
    if (tipoSelecionado !== "Todas" && r.tipo !== tipoSelecionado) return false;
    if (restricoesFiltro.length > 0) {
      const tags = Array.isArray(r.restricoes) ? r.restricoes : [];
      if (!restricoesFiltro.every((res) => tags.includes(res))) return false;
    }
    return true;
  });

  const abrirReceita = (receita) => {
    if (receita.premium && !isPremium) {
      setMostrarUpgrade(true);
      return;
    }
    setReceitaSelecionada(receita);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-4">
            Receitas por Idade
          </h1>
          <p className="text-lg text-white/90 font-corpo">
            Receitas nutritivas e práticas para cada fase do seu bebê
          </p>
        </div>
      </div>

      {/* Filtro de Fases */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {FASES.map((fase) => (
              <button
                key={fase.id}
                onClick={() => { setFaseSelecionada(fase.id); setTipoSelecionado("Todas"); }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-corpo font-semibold whitespace-nowrap transition text-sm ${
                  faseSelecionada === fase.id ? "text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                style={{ backgroundColor: faseSelecionada === fase.id ? fase.cor : undefined }}
              >
                <span>{fase.emoji}</span>
                <span>{fase.nome}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chips de Tipo */}
        <div className="border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-2">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setTipoSelecionado("Todas")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  tipoSelecionado === "Todas"
                    ? "bg-[#FF6B6B] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Todas
              </button>
              {TIPOS_RECEITA.map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => setTipoSelecionado(tipo)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                    tipoSelecionado === tipo
                      ? "bg-[#FF6B6B] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{TIPO_ICONS[tipo]}</span>
                  <span>{tipo}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filtros de restrição */}
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 flex items-center gap-3 flex-wrap">
            <span className="text-xs text-gray-500 font-corpo font-medium">Filtrar por:</span>
            {RESTRICOES_LIST.map((r) => (
              <button
                key={r}
                onClick={() => toggleRestricao(r)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition border ${
                  restricoesFiltro.includes(r)
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Receitas */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {loading ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-4">🍳</div>
            <p className="font-corpo">Carregando receitas...</p>
          </div>
        ) : receitasFiltradas.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-titulo font-bold text-gray-700 text-xl mb-2">
              Nenhuma receita encontrada
            </p>
            <p className="font-corpo text-sm">
              {receitas.filter((r) => r.fase === faseSelecionada).length === 0
                ? "Ainda não há receitas para esta fase. Adicione pelo painel admin!"
                : "Tente outra categoria ou remova os filtros."}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-titulo font-bold text-gray-900">
                {receitasFiltradas.length} receita{receitasFiltradas.length !== 1 ? "s" : ""}
                {tipoSelecionado !== "Todas" && ` · ${tipoSelecionado}`}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {receitasFiltradas.map((receita) => (
                <ReceitaCard
                  key={receita.id || receita._id}
                  receita={receita}
                  isPremium={isPremium}
                  onClick={() => abrirReceita(receita)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {receitaSelecionada && (
        <ReceitaModal
          receita={receitaSelecionada}
          isPremium={isPremium}
          onClose={() => setReceitaSelecionada(null)}
        />
      )}
      {mostrarUpgrade && <ModalUpgrade onClose={() => setMostrarUpgrade(false)} />}
    </div>
  );
}

function ReceitaCard({ receita, isPremium, onClick }) {
  const bloqueado = receita.premium && !isPremium;
  const restricoes = Array.isArray(receita.restricoes) ? receita.restricoes : [];

  return (
    <div
      onClick={onClick}
      className={`bg-white border border-gray-200 rounded-[10px] overflow-hidden hover:shadow-lg transition cursor-pointer relative`}
    >
      {receita.premium && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <span>👑</span>
          <span>Premium</span>
        </div>
      )}

      {/* Imagem */}
      <div className={`h-48 w-full bg-gray-100 overflow-hidden relative ${bloqueado ? "blur-sm" : ""}`}>
        {receita.foto ? (
          <img src={receita.foto} alt={receita.nome} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-[#FFF5F5] to-[#FFE4E1]">
            {TIPO_ICONS[receita.tipo] || "🍽️"}
          </div>
        )}
      </div>

      {bloqueado && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-2">🔒</div>
            <p className="text-sm font-corpo font-bold text-gray-900">Receita Premium</p>
          </div>
        </div>
      )}

      <div className={`p-4 ${bloqueado ? "blur-sm" : ""}`}>
        {receita.tipo && (
          <span className="inline-flex items-center gap-1 text-xs bg-[#FFF5F5] text-[#FF6B6B] px-2 py-0.5 rounded-full font-semibold mb-2">
            {TIPO_ICONS[receita.tipo]} {receita.tipo}
          </span>
        )}
        <h3 className="font-titulo font-bold text-lg text-gray-900 mb-2">{receita.nome}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 font-corpo mb-3">
          <span>⏰ {receita.tempo} min</span>
          <span>📊 {receita.dificuldade}</span>
        </div>
        {restricoes.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {restricoes.map((r) => (
              <span key={r} className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-corpo">
                {r}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(receita.tags) ? receita.tags : []).slice(0, 3).map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-corpo">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const DIAS_PLANO = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const REFEICOES_PLANO = ["Café da Manhã", "Lanche Manhã", "Almoço", "Lanche Tarde", "Jantar"];

function ReceitaModal({ receita, isPremium, onClose }) {
  const { adicionarIngredientes } = useListaCompras();
  const { adicionarReceita } = usePlanejamento();
  const [selecionados, setSelecionados] = useState(() => new Set(Array.isArray(receita.ingredientes) ? receita.ingredientes : []));
  const [adicionadoCount, setAdicionadoCount] = useState(null);
  const [planoAberto, setPlanoAberto] = useState(false);
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda");
  const [refeicaoSelecionada, setRefeicaoSelecionada] = useState("Almoço");
  const [planoFeedback, setPlanoFeedback] = useState(false);

  const ingredientes = Array.isArray(receita.ingredientes) ? receita.ingredientes : [];
  const restricoes = Array.isArray(receita.restricoes) ? receita.restricoes : [];

  const toggleIngrediente = (ing) => {
    setSelecionados((prev) => {
      const next = new Set(prev);
      next.has(ing) ? next.delete(ing) : next.add(ing);
      return next;
    });
  };

  const handleAdicionarLista = () => {
    const count = adicionarIngredientes([...selecionados], receita.nome);
    setAdicionadoCount(count);
    setTimeout(() => setAdicionadoCount(null), 3000);
  };

  const handleAdicionarPlano = () => {
    adicionarReceita(diaSelecionado, refeicaoSelecionada, receita);
    setPlanoFeedback(true);
    setTimeout(() => { setPlanoFeedback(false); setPlanoAberto(false); }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-[10px] max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div>
            {receita.tipo && (
              <span className="inline-flex items-center gap-1 text-xs bg-[#FFF5F5] text-[#FF6B6B] px-2 py-0.5 rounded-full font-semibold mb-2">
                {TIPO_ICONS[receita.tipo]} {receita.tipo}
              </span>
            )}
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-2">{receita.nome}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600 font-corpo">
              <span>⏰ {receita.tempo} min</span>
              <span>📊 {receita.dificuldade}</span>
              <span>🍽️ {receita.fase} meses</span>
            </div>
            {restricoes.length > 0 && (
              <div className="flex gap-1 mt-2">
                {restricoes.map((r) => (
                  <span key={r} className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-corpo">
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 ml-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {receita.nutrientes && (
            <div className="bg-gray-50 rounded-[10px] p-4">
              <h3 className="font-titulo font-bold text-gray-900 mb-3">Informação Nutricional</h3>
              <div className="grid grid-cols-3 gap-3 text-sm font-corpo">
                <div><p className="text-gray-600">Calorias</p><p className="font-bold text-gray-900">{receita.nutrientes.calorias} kcal</p></div>
                <div><p className="text-gray-600">Proteína</p><p className="font-bold text-gray-900">{receita.nutrientes.proteina}g</p></div>
                <div><p className="text-gray-600">Ferro</p><p className="font-bold text-gray-900">{receita.nutrientes.ferro}mg</p></div>
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-titulo font-bold text-gray-900">Ingredientes</h3>
              {isPremium && <span className="text-xs text-gray-400 font-corpo">Selecione para adicionar à lista</span>}
            </div>
            <ul className="space-y-2 font-corpo text-gray-700">
              {ingredientes.map((ing, i) =>
                isPremium ? (
                  <li key={i} onClick={() => toggleIngrediente(ing)} className="flex items-center gap-3 p-2 rounded-[8px] cursor-pointer hover:bg-gray-50 transition">
                    <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition ${selecionados.has(ing) ? "bg-[#FF6B6B] border-[#FF6B6B]" : "border-gray-300"}`}>
                      {selecionados.has(ing) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span>{ing}</span>
                  </li>
                ) : (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#FF6B6B] mt-1">•</span><span>{ing}</span></li>
                )
              )}
            </ul>
            {isPremium && (
              <div className="mt-4">
                {adicionadoCount !== null ? (
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-[10px] px-4 py-3 font-corpo text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {adicionadoCount === 0 ? "Ingredientes já estão na lista!" : `${adicionadoCount} ingrediente${adicionadoCount !== 1 ? "s" : ""} adicionado${adicionadoCount !== 1 ? "s" : ""}!`}
                  </div>
                ) : (
                  <button onClick={handleAdicionarLista} disabled={selecionados.size === 0} className="w-full py-3 bg-[#FF6B6B] text-white font-corpo font-semibold rounded-[10px] hover:bg-[#ff5252] transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    <span>🛒</span>
                    <span>Adicionar {selecionados.size} ingrediente{selecionados.size !== 1 ? "s" : ""} à lista</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {isPremium && (
            <div className="border border-gray-200 rounded-[10px] overflow-hidden">
              <button onClick={() => setPlanoAberto((v) => !v)} className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition">
                <span className="font-corpo font-semibold text-gray-800 text-sm flex items-center gap-2"><span>📅</span> Adicionar ao Planejamento</span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${planoAberto ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {planoAberto && (
                <div className="p-4 space-y-3">
                  {planoFeedback ? (
                    <div className="flex items-center gap-2 text-green-700 font-corpo text-sm font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Adicionado ao planejamento!
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-corpo font-semibold text-gray-500 mb-1">Dia</label>
                          <select value={diaSelecionado} onChange={(e) => setDiaSelecionado(e.target.value)} className="w-full border border-gray-200 rounded-[8px] px-3 py-2 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B]">
                            {DIAS_PLANO.map((d) => <option key={d}>{d}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-corpo font-semibold text-gray-500 mb-1">Refeição</label>
                          <select value={refeicaoSelecionada} onChange={(e) => setRefeicaoSelecionada(e.target.value)} className="w-full border border-gray-200 rounded-[8px] px-3 py-2 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B]">
                            {REFEICOES_PLANO.map((r) => <option key={r}>{r}</option>)}
                          </select>
                        </div>
                      </div>
                      <button onClick={handleAdicionarPlano} className="w-full py-2.5 bg-[#FFD700] text-white font-corpo font-semibold rounded-[10px] hover:bg-[#FFA500] transition text-sm">Confirmar</button>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          <div>
            <h3 className="font-titulo font-bold text-gray-900 mb-3">Modo de Preparo</h3>
            <div className="font-corpo text-gray-700 leading-relaxed whitespace-pre-line">{receita.preparo}</div>
          </div>

          {receita.dicas && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-[10px] p-4">
              <h3 className="font-titulo font-bold text-gray-900 mb-2 flex items-center gap-2"><span>💡</span><span>Dica</span></h3>
              <p className="font-corpo text-gray-700 text-sm leading-relaxed">{receita.dicas}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {(Array.isArray(receita.tags) ? receita.tags : []).map((tag, i) => (
              <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-corpo">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
