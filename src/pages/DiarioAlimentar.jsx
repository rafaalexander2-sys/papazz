import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ModalUpgrade from "../components/premium/ModalUpgrade";

export default function DiarioAlimentar() {
  const { isPremium } = useAuth();
  const [mostrarUpgrade, setMostrarUpgrade] = useState(false);

  // Se não for premium, mostra tela bloqueada
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
              Registre a aceitação do bebê em cada refeição e acompanhe a
              evolução alimentar com gráficos.
            </p>
            <button
              onClick={() => setMostrarUpgrade(true)}
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-corpo font-bold py-3 rounded-[10px] hover:shadow-lg transition"
            >
              Desbloquear Premium
            </button>
          </div>
        </div>

        {mostrarUpgrade && (
          <ModalUpgrade onClose={() => setMostrarUpgrade(false)} />
        )}
      </div>
    );
  }

  // Se for premium, mostra a funcionalidade
  return <DiarioAlimentarPremium />;
}

// Componente para usuários premium
function DiarioAlimentarPremium() {
  const [registros, setRegistros] = useState([
    {
      id: 1,
      data: "26/04/2026",
      refeicao: "Almoço",
      alimento: "Papa de Quinoa com Abóbora",
      aceitacao: "boa",
      observacao: "Comeu tudo! Adorou a textura cremosa.",
    },
    {
      id: 2,
      data: "26/04/2026",
      refeicao: "Lanche da Tarde",
      alimento: "Banana amassada",
      aceitacao: "media",
      observacao: "Comeu metade, estava cansado.",
    },
    {
      id: 3,
      data: "25/04/2026",
      refeicao: "Jantar",
      alimento: "Frango com Batata Doce",
      aceitacao: "ruim",
      observacao: "Recusou o frango, só comeu batata.",
    },
  ]);

  const getEmojiAceitacao = (aceitacao) => {
    if (aceitacao === "boa") return "😋";
    if (aceitacao === "media") return "😐";
    return "😔";
  };

  const getCorAceitacao = (aceitacao) => {
    if (aceitacao === "boa")
      return "bg-green-100 text-green-800 border-green-200";
    if (aceitacao === "media")
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📖</span>
            <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white">
              Diário Alimentar
            </h1>
          </div>
          <p className="text-lg text-white/90 font-corpo">
            Acompanhe a aceitação e evolução do seu bebê
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        {/* Botões de Ação */}
        <div className="flex gap-3 mb-6">
          <button className="px-4 py-2 bg-[#FF6B6B] text-white font-corpo font-semibold rounded-[10px] hover:shadow-lg transition">
            Novo Registro
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 font-corpo font-semibold rounded-[10px] hover:bg-gray-50 transition">
            Ver Gráficos
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 font-corpo font-semibold rounded-[10px] hover:bg-gray-50 transition">
            Exportar Histórico
          </button>
        </div>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-[10px] p-4 text-center">
            <div className="text-3xl mb-2">😋</div>
            <p className="text-2xl font-titulo font-bold text-green-800">65%</p>
            <p className="text-sm font-corpo text-green-700">Boa aceitação</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-[10px] p-4 text-center">
            <div className="text-3xl mb-2">😐</div>
            <p className="text-2xl font-titulo font-bold text-yellow-800">
              25%
            </p>
            <p className="text-sm font-corpo text-yellow-700">
              Média aceitação
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-[10px] p-4 text-center">
            <div className="text-3xl mb-2">😔</div>
            <p className="text-2xl font-titulo font-bold text-red-800">10%</p>
            <p className="text-sm font-corpo text-red-700">Baixa aceitação</p>
          </div>
        </div>

        {/* Timeline de Registros */}
        <div className="space-y-4">
          <h2 className="text-xl font-titulo font-bold text-gray-900 mb-4">
            Últimos Registros
          </h2>

          {registros.map((registro) => (
            <div
              key={registro.id}
              className="bg-white border border-gray-200 rounded-[10px] p-5 hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                {/* Emoji de Aceitação */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-2xl ${getCorAceitacao(registro.aceitacao)}`}
                  >
                    {getEmojiAceitacao(registro.aceitacao)}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-corpo font-bold text-gray-900">
                        {registro.alimento}
                      </h3>
                      <p className="text-sm text-gray-500 font-corpo">
                        {registro.refeicao} • {registro.data}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-corpo font-semibold px-3 py-1 rounded-full border ${getCorAceitacao(registro.aceitacao)}`}
                    >
                      {registro.aceitacao === "boa"
                        ? "Adorou"
                        : registro.aceitacao === "media"
                          ? "Normal"
                          : "Recusou"}
                    </span>
                  </div>

                  {registro.observacao && (
                    <p className="text-sm text-gray-700 font-corpo leading-relaxed bg-gray-50 p-3 rounded-[10px]">
                      {registro.observacao}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dica */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-[10px] p-4">
          <p className="font-corpo text-sm text-gray-700">
            💡 <strong>Dica:</strong> Registre sempre após as refeições para não
            esquecer detalhes. Observações ajudam a identificar padrões de
            aceitação.
          </p>
        </div>
      </div>
    </div>
  );
}
