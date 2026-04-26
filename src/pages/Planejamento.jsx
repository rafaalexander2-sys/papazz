import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ModalUpgrade from "../components/premium/ModalUpgrade";

export default function Planejamento() {
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
              Planejamento Semanal
            </h1>
            <p className="text-gray-600 font-corpo mb-6 leading-relaxed">
              Monte cardápios da semana completa, economize tempo e garanta
              alimentação balanceada para seu bebê.
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
  return <PlanejamentoPremium />;
}

// Componente para usuários premium
function PlanejamentoPremium() {
  const diasDaSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
  const refeicoes = [
    "Café da Manhã",
    "Lanche da Manhã",
    "Almoço",
    "Lanche da Tarde",
    "Jantar",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📅</span>
            <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white">
              Planejamento Semanal
            </h1>
          </div>
          <p className="text-lg text-white/90 font-corpo">
            Organize as refeições da semana e facilite sua rotina
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Botões de Ação */}
        <div className="flex gap-3 mb-6">
          <button className="px-4 py-2 bg-[#FF6B6B] text-white font-corpo font-semibold rounded-[10px] hover:shadow-lg transition">
            Gerar Planejamento Automático
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 font-corpo font-semibold rounded-[10px] hover:bg-gray-50 transition">
            Exportar PDF
          </button>
        </div>

        {/* Tabela de Planejamento */}
        <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-titulo font-bold text-gray-900 border-b border-r border-gray-200">
                    Refeição
                  </th>
                  {diasDaSemana.map((dia) => (
                    <th
                      key={dia}
                      className="p-4 text-center font-titulo font-bold text-gray-900 border-b border-gray-200 min-w-[150px]"
                    >
                      {dia}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {refeicoes.map((refeicao, i) => (
                  <tr
                    key={refeicao}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-4 font-corpo font-semibold text-gray-900 border-r border-gray-200">
                      {refeicao}
                    </td>
                    {diasDaSemana.map((dia) => (
                      <td key={dia} className="p-2 border-gray-200">
                        <button className="w-full h-20 border-2 border-dashed border-gray-300 rounded-[10px] hover:border-[#FF6B6B] hover:bg-gray-50 transition flex items-center justify-center text-gray-400 hover:text-gray-600">
                          <span className="text-2xl">+</span>
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dica */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-[10px] p-4">
          <p className="font-corpo text-sm text-gray-700">
            💡 <strong>Dica:</strong> Clique nos quadrados para adicionar
            receitas do seu catálogo. O planejamento é salvo automaticamente.
          </p>
        </div>
      </div>
    </div>
  );
}
