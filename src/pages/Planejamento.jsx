import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePlanejamento } from "../context/PlanejamentoContext";
import { useListaCompras } from "../context/ListaComprasContext";
import receitas from "../data/receitas";
import ModalUpgrade from "../components/premium/ModalUpgrade";
import FotoReceita from "../components/FotoReceita";

const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const REFEICOES = ["Café da Manhã", "Lanche Manhã", "Almoço", "Lanche Tarde", "Jantar"];
const FASES = [
  { id: "todas", nome: "Todas" },
  { id: "6-8", nome: "6-8m" },
  { id: "8-10", nome: "8-10m" },
  { id: "10-12", nome: "10-12m" },
  { id: "12+", nome: "12+m" },
];

export default function Planejamento() {
  const { isPremium } = useAuth();
  const [mostrarUpgrade, setMostrarUpgrade] = useState(false);

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-[10px] p-8 shadow-lg">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-2xl font-titulo font-bold text-gray-900 mb-3">
              Planejamento Semanal
            </h1>
            <p className="text-gray-600 font-corpo mb-6 leading-relaxed">
              Monte cardápios da semana, conecte com as receitas e gere sua lista de compras automaticamente.
            </p>
            <button
              onClick={() => setMostrarUpgrade(true)}
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-corpo font-bold py-3 rounded-[10px] hover:shadow-lg transition"
            >
              Desbloquear Premium
            </button>
          </div>
        </div>
        {mostrarUpgrade && <ModalUpgrade onClose={() => setMostrarUpgrade(false)} />}
      </div>
    );
  }

  return <PlanejamentoPremium />;
}

function PlanejamentoPremium() {
  const { plano, adicionarReceita, removerReceita, limparPlano, receitasUnicas, chave } = usePlanejamento();
  const { adicionarIngredientes } = useListaCompras();

  const [celula, setCelula] = useState(null);
  const [toast, setToast] = useState(null);

  const totalCelulas = Object.keys(plano).length;
  const totalReceitas = receitasUnicas().length;

  const mostrarToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleGerarLista = () => {
    const unicas = receitasUnicas();
    if (unicas.length === 0) {
      mostrarToast("Adicione receitas ao planejamento primeiro.");
      return;
    }
    let total = 0;
    unicas.forEach((r) => {
      total += adicionarIngredientes(r.ingredientes, r.nome);
    });
    mostrarToast(
      total > 0
        ? `✅ ${total} ingredientes adicionados à lista!`
        : "Ingredientes já estão na lista de compras."
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">📅</span>
                <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white">
                  Planejamento Semanal
                </h1>
              </div>
              <p className="text-white/90 font-corpo">
                {totalCelulas === 0
                  ? "Clique em + para adicionar receitas"
                  : `${totalCelulas} refeições planejadas · ${totalReceitas} receita${totalReceitas !== 1 ? "s" : ""} diferente${totalReceitas !== 1 ? "s" : ""}`}
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleGerarLista}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#FF6B6B] font-corpo font-bold rounded-[10px] hover:shadow-lg transition text-sm"
              >
                <span>🛒</span>
                <span>Gerar Lista de Compras</span>
              </button>
              {totalCelulas > 0 && (
                <button
                  onClick={limparPlano}
                  className="px-4 py-2.5 bg-white/20 text-white font-corpo font-semibold rounded-[10px] hover:bg-white/30 transition text-sm"
                >
                  Limpar tudo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: 720 }}>
            <thead>
              <tr>
                <th className="w-28 p-3 text-left font-titulo font-bold text-gray-500 text-sm border-b border-r border-gray-200">
                  Refeição
                </th>
                {DIAS.map((dia) => (
                  <th
                    key={dia}
                    className="p-3 text-center font-titulo font-bold text-gray-900 text-sm border-b border-gray-200 min-w-[130px]"
                  >
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REFEICOES.map((refeicao, ri) => (
                <tr key={refeicao} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="p-3 font-corpo font-semibold text-gray-700 text-sm border-r border-gray-200 align-top whitespace-nowrap">
                    {refeicao}
                  </td>
                  {DIAS.map((dia) => {
                    const item = plano[chave(dia, refeicao)];
                    return (
                      <td key={dia} className="p-1.5 align-top">
                        {item ? (
                          <CelulaPreenchida
                            item={item}
                            onRemover={() => removerReceita(dia, refeicao)}
                          />
                        ) : (
                          <button
                            onClick={() => setCelula({ dia, refeicao })}
                            className="w-full h-20 border-2 border-dashed border-gray-200 rounded-[8px] hover:border-[#FF6B6B] hover:bg-red-50/30 transition flex items-center justify-center text-gray-300 hover:text-[#FF6B6B]"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dica quando vazio */}
        {totalCelulas === 0 && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-[10px] p-4 text-center">
            <p className="font-corpo text-sm text-gray-700">
              💡 <strong>Dica:</strong> Monte o plano e clique em{" "}
              <strong>"Gerar Lista de Compras"</strong> — todos os ingredientes das receitas vão direto para sua lista, sem duplicatas.
            </p>
          </div>
        )}

        {/* Resumo das receitas no plano */}
        {totalReceitas > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-titulo font-bold text-gray-900">
                Receitas desta semana
              </h2>
              <Link
                to="/lista-compras"
                className="text-sm font-corpo font-semibold text-[#FF6B6B] hover:underline"
              >
                Ver lista de compras →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {receitasUnicas().map((r) => (
                <div
                  key={r.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-[10px]"
                >
                  <FotoReceita
                    foto={r.foto}
                    alt={r.nome}
                    categoria={r.categoria}
                    fase={r.fase}
                    className="w-10 h-10 rounded-[6px] object-cover flex-shrink-0"
                  />
                  <p className="font-corpo text-sm font-medium text-gray-800 leading-tight line-clamp-2">
                    {r.nome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal picker */}
      {celula && (
        <PickerReceita
          dia={celula.dia}
          refeicao={celula.refeicao}
          onSelecionar={(receita) => {
            adicionarReceita(celula.dia, celula.refeicao, receita);
            setCelula(null);
          }}
          onClose={() => setCelula(null)}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white font-corpo text-sm font-semibold px-5 py-3 rounded-full shadow-lg whitespace-nowrap">
          {toast}
        </div>
      )}
    </div>
  );
}

function CelulaPreenchida({ item, onRemover }) {
  return (
    <div className="relative group w-full h-20 rounded-[8px] overflow-hidden border border-gray-200">
      <FotoReceita
        foto={item.foto}
        alt={item.nome}
        categoria={item.categoria}
        fase={item.fase}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-1.5">
        <p className="text-white text-xs font-corpo font-semibold leading-tight line-clamp-2">
          {item.nome}
        </p>
      </div>
      <button
        onClick={onRemover}
        className="absolute top-1 right-1 w-5 h-5 bg-black/60 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        aria-label="Remover"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

function PickerReceita({ dia, refeicao, onSelecionar, onClose }) {
  const [busca, setBusca] = useState("");
  const [fase, setFase] = useState("todas");

  const filtradas = receitas.filter((r) => {
    const buscaOk = r.nome.toLowerCase().includes(busca.toLowerCase());
    const faseOk = fase === "todas" || r.fase === fase;
    return buscaOk && faseOk;
  });

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:max-w-2xl rounded-t-2xl md:rounded-[10px] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-titulo font-bold text-gray-900">Escolher receita</h2>
              <p className="text-sm text-gray-500 font-corpo">
                {dia} · {refeicao}
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <input
            type="text"
            placeholder="Buscar receita..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full border border-gray-200 rounded-[8px] px-4 py-2.5 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B] mb-3"
            autoFocus
          />

          <div className="flex gap-2 overflow-x-auto pb-1">
            {FASES.map((f) => (
              <button
                key={f.id}
                onClick={() => setFase(f.id)}
                className={`px-3 py-1 rounded-full text-xs font-corpo font-semibold whitespace-nowrap transition ${
                  fase === f.id
                    ? "bg-[#FF6B6B] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f.nome}
              </button>
            ))}
          </div>
        </div>

        {/* Lista */}
        <div className="overflow-y-auto flex-1 p-3">
          {filtradas.length === 0 ? (
            <p className="text-center text-gray-400 font-corpo py-8">
              Nenhuma receita encontrada.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {filtradas.map((r) => (
                <button
                  key={r.id}
                  onClick={() => onSelecionar(r)}
                  className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-[8px] hover:border-[#FF6B6B] hover:bg-red-50/20 transition text-left"
                >
                  <FotoReceita
                    foto={r.foto}
                    alt={r.nome}
                    categoria={r.categoria}
                    fase={r.fase}
                    className="w-12 h-12 rounded-[6px] object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-corpo font-semibold text-gray-900 text-xs leading-tight line-clamp-2 mb-1">
                      {r.nome}
                    </p>
                    <p className="text-xs text-gray-400 font-corpo">
                      {r.fase}m · {r.tempo}min
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
