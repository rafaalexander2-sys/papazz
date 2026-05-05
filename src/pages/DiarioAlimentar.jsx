import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDiario } from "../context/DiarioContext";
import receitas from "../data/receitas";
import ModalUpgrade from "../components/premium/ModalUpgrade";

const REFEICOES = ["Café da Manhã", "Lanche Manhã", "Almoço", "Lanche Tarde", "Jantar"];

const ACEITACAO = [
  { valor: "boa",   emoji: "😋", label: "Adorou",  cor: "bg-green-100 border-green-400 text-green-800" },
  { valor: "media", emoji: "😐", label: "Normal",  cor: "bg-yellow-100 border-yellow-400 text-yellow-800" },
  { valor: "ruim",  emoji: "😔", label: "Recusou", cor: "bg-red-100 border-red-400 text-red-800" },
];

function hoje() {
  return new Date().toISOString().split("T")[0];
}

function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-");
  const d = new Date(iso + "T00:00:00");
  const hj = hoje();
  const ontem = new Date();
  ontem.setDate(ontem.getDate() - 1);
  const ontemStr = ontem.toISOString().split("T")[0];
  if (iso === hj) return "Hoje";
  if (iso === ontemStr) return "Ontem";
  return d.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "2-digit" });
}

export default function DiarioAlimentar() {
  const { isPremium } = useAuth();
  const [mostrarUpgrade, setMostrarUpgrade] = useState(false);

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-[10px] p-8 shadow-lg">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-2xl font-titulo font-bold text-gray-900 mb-3">
              Diário Alimentar
            </h1>
            <p className="text-gray-600 font-corpo mb-6 leading-relaxed">
              Registre a aceitação do bebê em cada refeição e veja gráficos de evolução.
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

  return <DiarioPremium />;
}

function DiarioPremium() {
  const { registros, adicionarRegistro, removerRegistro, stats, statsPorRefeicao, alimentosRecusados, alimentosAmados, exportarCSV } = useDiario();
  const [aba, setAba] = useState("registros"); // "registros" | "analise"
  const [novoAberto, setNovoAberto] = useState(false);

  const s = stats();

  // Agrupa registros por data
  const porData = registros.reduce((acc, r) => {
    acc[r.data] = acc[r.data] || [];
    acc[r.data].push(r);
    return acc;
  }, {});
  const datas = Object.keys(porData).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">📖</span>
                <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white">
                  Diário Alimentar
                </h1>
              </div>
              <p className="text-white/90 font-corpo">
                {s.total === 0
                  ? "Nenhum registro ainda"
                  : `${s.total} registro${s.total !== 1 ? "s" : ""} · ${s.pctBoa}% boa aceitação`}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setNovoAberto(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#FF6B6B] font-corpo font-bold rounded-[10px] hover:shadow-lg transition text-sm"
              >
                <span>+</span> Novo Registro
              </button>
              {s.total > 0 && (
                <button
                  onClick={exportarCSV}
                  className="px-4 py-2.5 bg-white/20 text-white font-corpo font-semibold rounded-[10px] hover:bg-white/30 transition text-sm"
                >
                  Exportar CSV
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-16 md:top-20 z-30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 flex gap-0">
          {[
            { id: "registros", label: "Registros" },
            { id: "analise", label: "Análise" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setAba(t.id)}
              className={`px-5 py-3 font-corpo font-semibold text-sm border-b-2 transition ${
                aba === t.id
                  ? "border-[#FF6B6B] text-[#FF6B6B]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        {aba === "registros" ? (
          <AbaRegistros
            datas={datas}
            porData={porData}
            onRemover={removerRegistro}
            onNovo={() => setNovoAberto(true)}
          />
        ) : (
          <AbaAnalise s={s} statsPorRefeicao={statsPorRefeicao()} amados={alimentosAmados()} recusados={alimentosRecusados()} />
        )}
      </div>

      {novoAberto && (
        <ModalNovoRegistro
          onSalvar={(r) => { adicionarRegistro(r); setNovoAberto(false); }}
          onClose={() => setNovoAberto(false)}
        />
      )}
    </div>
  );
}

// ─── Aba Registros ────────────────────────────────────────────────────────────

function AbaRegistros({ datas, porData, onRemover, onNovo }) {
  if (datas.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📖</div>
        <h2 className="text-xl font-titulo font-bold text-gray-900 mb-2">Diário vazio</h2>
        <p className="text-gray-500 font-corpo mb-6">
          Registre a primeira refeição do seu bebê.
        </p>
        <button
          onClick={onNovo}
          className="px-6 py-3 bg-[#FF6B6B] text-white font-corpo font-bold rounded-[10px] hover:shadow-lg transition"
        >
          + Novo Registro
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {datas.map((data) => (
        <div key={data}>
          <h2 className="text-sm font-corpo font-semibold text-gray-400 uppercase tracking-wide mb-3 capitalize">
            {formatarData(data)}
          </h2>
          <div className="space-y-3">
            {porData[data].map((r) => (
              <CardRegistro key={r.id} registro={r} onRemover={onRemover} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CardRegistro({ registro, onRemover }) {
  const ac = ACEITACAO.find((a) => a.valor === registro.aceitacao) || ACEITACAO[0];

  return (
    <div className="bg-white border border-gray-200 rounded-[10px] p-4 hover:shadow-md transition group">
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center text-xl ${ac.cor}`}>
          {ac.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-corpo font-bold text-gray-900 leading-tight">{registro.alimento}</h3>
            <span className={`flex-shrink-0 text-xs font-corpo font-semibold px-2.5 py-0.5 rounded-full border ${ac.cor}`}>
              {ac.label}
            </span>
          </div>
          <p className="text-sm text-gray-400 font-corpo mb-2">{registro.refeicao}</p>
          {registro.observacao && (
            <p className="text-sm text-gray-600 font-corpo leading-relaxed bg-gray-50 px-3 py-2 rounded-[8px]">
              {registro.observacao}
            </p>
          )}
        </div>
        <button
          onClick={() => onRemover(registro.id)}
          className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition p-1"
          aria-label="Remover"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Aba Análise ──────────────────────────────────────────────────────────────

function AbaAnalise({ s, statsPorRefeicao, amados, recusados }) {
  if (s.total === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">📊</div>
        <p className="text-gray-400 font-corpo">Adicione registros para ver a análise.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Cards de resumo */}
      <div className="grid grid-cols-3 gap-4">
        {ACEITACAO.map((ac) => {
          const pct = ac.valor === "boa" ? s.pctBoa : ac.valor === "media" ? s.pctMedia : s.pctRuim;
          const count = ac.valor === "boa" ? s.boa : ac.valor === "media" ? s.media : s.ruim;
          return (
            <div key={ac.valor} className={`border rounded-[10px] p-4 text-center ${ac.cor}`}>
              <div className="text-3xl mb-1">{ac.emoji}</div>
              <p className="text-2xl font-titulo font-bold">{pct}%</p>
              <p className="text-xs font-corpo font-semibold">{ac.label}</p>
              <p className="text-xs font-corpo opacity-70">{count} vez{count !== 1 ? "es" : ""}</p>
            </div>
          );
        })}
      </div>

      {/* Aceitação por refeição */}
      {statsPorRefeicao.length > 0 && (
        <div>
          <h2 className="text-lg font-titulo font-bold text-gray-900 mb-4">Aceitação por refeição</h2>
          <div className="space-y-3">
            {statsPorRefeicao.map((r) => (
              <div key={r.refeicao}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-corpo font-semibold text-gray-700">{r.refeicao}</span>
                  <span className="text-xs text-gray-400 font-corpo">{r.total} registro{r.total !== 1 ? "s" : ""}</span>
                </div>
                <div className="h-5 bg-gray-100 rounded-full overflow-hidden flex">
                  {r.pctBoa > 0 && (
                    <div
                      className="h-full bg-green-400 flex items-center justify-center text-white text-xs font-corpo font-bold transition-all"
                      style={{ width: `${r.pctBoa}%` }}
                    >
                      {r.pctBoa >= 15 && `${r.pctBoa}%`}
                    </div>
                  )}
                  {r.pctMedia > 0 && (
                    <div
                      className="h-full bg-yellow-400 flex items-center justify-center text-white text-xs font-corpo font-bold transition-all"
                      style={{ width: `${r.pctMedia}%` }}
                    >
                      {r.pctMedia >= 15 && `${r.pctMedia}%`}
                    </div>
                  )}
                  {r.pctRuim > 0 && (
                    <div
                      className="h-full bg-red-400 flex items-center justify-center text-white text-xs font-corpo font-bold transition-all"
                      style={{ width: `${r.pctRuim}%` }}
                    >
                      {r.pctRuim >= 15 && `${r.pctRuim}%`}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3">
            {[["bg-green-400", "Adorou"], ["bg-yellow-400", "Normal"], ["bg-red-400", "Recusou"]].map(([cor, label]) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${cor}`} />
                <span className="text-xs font-corpo text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Favoritos e recusados */}
      <div className="grid md:grid-cols-2 gap-6">
        {amados.length > 0 && (
          <div>
            <h2 className="text-base font-titulo font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>😋</span> Mais adorados
            </h2>
            <div className="space-y-2">
              {amados.map((a, i) => (
                <div key={a.nome} className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-[8px]">
                  <span className="text-sm font-titulo font-bold text-green-600 w-5 text-center">{i + 1}</span>
                  <span className="flex-1 text-sm font-corpo text-gray-800 leading-tight">{a.nome}</span>
                  <span className="text-xs font-corpo text-green-600 font-semibold">{a.count}×</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {recusados.length > 0 && (
          <div>
            <h2 className="text-base font-titulo font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>😔</span> Mais recusados
            </h2>
            <div className="space-y-2">
              {recusados.map((a, i) => (
                <div key={a.nome} className="flex items-center gap-3 p-3 bg-red-50 border border-red-100 rounded-[8px]">
                  <span className="text-sm font-titulo font-bold text-red-500 w-5 text-center">{i + 1}</span>
                  <span className="flex-1 text-sm font-corpo text-gray-800 leading-tight">{a.nome}</span>
                  <span className="text-xs font-corpo text-red-500 font-semibold">{a.count}×</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-[10px] p-4">
        <p className="font-corpo text-sm text-gray-700">
          💡 <strong>Dica:</strong> Alimentos recusados podem ser reapresentados após 10-15 dias.
          Crianças precisam de até 15 exposições antes de aceitar um alimento novo.
        </p>
      </div>
    </div>
  );
}

// ─── Modal Novo Registro ──────────────────────────────────────────────────────

function ModalNovoRegistro({ onSalvar, onClose }) {
  const [data, setData] = useState(hoje());
  const [refeicao, setRefeicao] = useState("Almoço");
  const [alimento, setAlimento] = useState("");
  const [aceitacao, setAceitacao] = useState(null);
  const [observacao, setObservacao] = useState("");
  const [pickerAberto, setPickerAberto] = useState(false);

  const valido = alimento.trim() && aceitacao;

  const handleSalvar = () => {
    if (!valido) return;
    onSalvar({ data, refeicao, alimento: alimento.trim(), aceitacao, observacao: observacao.trim() });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={onClose}>
      <div
        className="bg-white w-full md:max-w-lg rounded-t-2xl md:rounded-[10px] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <h2 className="font-titulo font-bold text-gray-900">Novo Registro</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-5">
          {/* Data + Refeição */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-corpo font-semibold text-gray-500 mb-1">Data</label>
              <input
                type="date"
                value={data}
                max={hoje()}
                onChange={(e) => setData(e.target.value)}
                className="w-full border border-gray-200 rounded-[8px] px-3 py-2.5 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B]"
              />
            </div>
            <div>
              <label className="block text-xs font-corpo font-semibold text-gray-500 mb-1">Refeição</label>
              <select
                value={refeicao}
                onChange={(e) => setRefeicao(e.target.value)}
                className="w-full border border-gray-200 rounded-[8px] px-3 py-2.5 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B]"
              >
                {REFEICOES.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
          </div>

          {/* Alimento */}
          <div>
            <label className="block text-xs font-corpo font-semibold text-gray-500 mb-1">Alimento</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ex: Papa de batata-doce"
                value={alimento}
                onChange={(e) => setAlimento(e.target.value)}
                className="flex-1 border border-gray-200 rounded-[8px] px-3 py-2.5 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B]"
              />
              <button
                type="button"
                onClick={() => setPickerAberto(true)}
                className="px-3 py-2.5 border border-gray-200 rounded-[8px] text-sm hover:bg-gray-50 transition text-gray-600"
                title="Escolher receita"
              >
                🍽️
              </button>
            </div>
          </div>

          {/* Aceitação */}
          <div>
            <label className="block text-xs font-corpo font-semibold text-gray-500 mb-2">Como foi a aceitação?</label>
            <div className="grid grid-cols-3 gap-3">
              {ACEITACAO.map((ac) => (
                <button
                  key={ac.valor}
                  type="button"
                  onClick={() => setAceitacao(ac.valor)}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-[10px] border-2 transition font-corpo font-semibold text-sm ${
                    aceitacao === ac.valor ? ac.cor + " border-current" : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <span className="text-2xl">{ac.emoji}</span>
                  {ac.label}
                </button>
              ))}
            </div>
          </div>

          {/* Observação */}
          <div>
            <label className="block text-xs font-corpo font-semibold text-gray-500 mb-1">
              Observação <span className="font-normal text-gray-400">(opcional)</span>
            </label>
            <textarea
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
              placeholder="Ex: Comeu metade, mostrou interesse na colher..."
              rows={3}
              className="w-full border border-gray-200 rounded-[8px] px-3 py-2.5 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B] resize-none"
            />
          </div>
        </div>

        <div className="p-5 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={handleSalvar}
            disabled={!valido}
            className="w-full py-3 bg-[#FF6B6B] text-white font-corpo font-bold rounded-[10px] hover:bg-[#ff5252] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Salvar Registro
          </button>
        </div>
      </div>

      {pickerAberto && (
        <PickerReceita
          onSelecionar={(nome) => { setAlimento(nome); setPickerAberto(false); }}
          onClose={() => setPickerAberto(false)}
        />
      )}
    </div>
  );
}

// ─── Picker de Receita ────────────────────────────────────────────────────────

function PickerReceita({ onSelecionar, onClose }) {
  const [busca, setBusca] = useState("");

  const filtradas = receitas.filter((r) =>
    r.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-60 flex items-end md:items-center justify-center p-0 md:p-4" onClick={onClose}>
      <div
        className="bg-white w-full md:max-w-lg rounded-t-2xl md:rounded-[10px] max-h-[70vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-titulo font-bold text-gray-900 text-sm">Escolher receita</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <input
            autoFocus
            type="text"
            placeholder="Buscar..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full border border-gray-200 rounded-[8px] px-3 py-2 font-corpo text-sm focus:outline-none focus:border-[#FF6B6B]"
          />
        </div>
        <div className="overflow-y-auto flex-1 p-2">
          {filtradas.map((r) => (
            <button
              key={r.id}
              onClick={() => onSelecionar(r.nome)}
              className="w-full flex items-center gap-3 p-3 rounded-[8px] hover:bg-gray-50 transition text-left"
            >
              {r.foto ? (
                <img src={r.foto} alt={r.nome} className="w-10 h-10 rounded-[6px] object-cover flex-shrink-0" />
              ) : (
                <div className="w-10 h-10 rounded-[6px] bg-gray-100 flex items-center justify-center text-lg flex-shrink-0">🍽️</div>
              )}
              <div className="min-w-0">
                <p className="font-corpo font-semibold text-gray-900 text-sm truncate">{r.nome}</p>
                <p className="text-xs text-gray-400 font-corpo">{r.fase}m</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
