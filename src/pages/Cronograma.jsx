import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cronograma() {
  const [idadeSelecionada, setIdadeSelecionada] = useState(9);

  const cronogramas = {
    6: [
      { hora: "7h", emoji: "🍼", titulo: "Leite", descricao: "Mamada ou mamadeira" },
      { hora: "10h", emoji: "🥄", titulo: "Papinha", descricao: "Papa de frutas" },
      { hora: "12h", emoji: "🍽️", titulo: "Almoço", descricao: "Papa salgada" },
      { hora: "15h", emoji: "🍼", titulo: "Leite", descricao: "Mamada ou mamadeira" },
      { hora: "18h", emoji: "🥣", titulo: "Jantar", descricao: "Papa salgada" },
      { hora: "21h", emoji: "🍼", titulo: "Leite", descricao: "Antes de dormir" },
    ],
    9: [
      { hora: "7h", emoji: "🍼", titulo: "Leite", descricao: "Mamada ou mamadeira" },
      { hora: "9h30", emoji: "🍌", titulo: "Lanche", descricao: "Fruta picada" },
      { hora: "12h", emoji: "🍽️", titulo: "Almoço", descricao: "Papa completa" },
      { hora: "15h", emoji: "🥤", titulo: "Lanche", descricao: "Fruta + água" },
      { hora: "18h", emoji: "🥣", titulo: "Jantar", descricao: "Papa completa" },
      { hora: "21h", emoji: "🍼", titulo: "Leite", descricao: "Antes de dormir" },
    ],
    12: [
      { hora: "7h", emoji: "🥛", titulo: "Café", descricao: "Leite + fruta" },
      { hora: "10h", emoji: "🍪", titulo: "Lanche", descricao: "Fruta ou biscoito" },
      { hora: "12h", emoji: "🍽️", titulo: "Almoço", descricao: "Comida da família" },
      { hora: "15h", emoji: "🧃", titulo: "Lanche", descricao: "Fruta + suco natural" },
      { hora: "18h30", emoji: "🍲", titulo: "Jantar", descricao: "Comida da família" },
      { hora: "21h", emoji: "🍼", titulo: "Leite", descricao: "Antes de dormir" },
    ],
    18: [
      { hora: "7h30", emoji: "🥞", titulo: "Café", descricao: "Leite + pão + fruta" },
      { hora: "10h", emoji: "🍎", titulo: "Lanche", descricao: "Fruta" },
      { hora: "12h30", emoji: "🍽️", titulo: "Almoço", descricao: "Refeição completa" },
      { hora: "15h30", emoji: "🥤", titulo: "Lanche", descricao: "Iogurte ou fruta" },
      { hora: "19h", emoji: "🍲", titulo: "Jantar", descricao: "Refeição completa" },
      { hora: "21h", emoji: "🥛", titulo: "Leite", descricao: "Opcional" },
    ],
  };

  const idades = [6, 9, 12, 18];
  const cronograma = cronogramas[idadeSelecionada] || cronogramas[9];

  return (
    <div className="bg-[#FFF9F0] min-h-screen pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFB347] to-[#FFCC7A] text-white p-5">
        <Link to="/" className="text-2xl">←</Link>
        <h1 className="text-2xl font-bold text-center mt-2">Cronograma</h1>
      </div>

      {/* Seletor de Idade */}
      <div className="p-5">
        <p className="text-center text-[#333] font-semibold mb-4">
          Selecione a idade:
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          {idades.map(idade => (
            <button
              key={idade}
              onClick={() => setIdadeSelecionada(idade)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                idadeSelecionada === idade
                  ? 'bg-gradient-to-r from-[#FFB347] to-[#FFCC7A] text-white shadow-lg scale-105'
                  : 'bg-white text-[#636E72] shadow'
              }`}
            >
              {idade} meses
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-5 max-w-2xl mx-auto">
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFB347] to-[#FFCC7A]"></div>

          {/* Itens */}
          <div className="space-y-6">
            {cronograma.map((item, i) => (
              <div key={i} className="relative flex items-start">
                {/* Bolinha */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFB347] to-[#FFCC7A] flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl">{item.emoji}</div>
                      <div className="text-white text-xs font-bold mt-1">{item.hora}</div>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="ml-6 flex-1 bg-white rounded-xl shadow p-4">
                  <h3 className="font-bold text-lg text-[#333]">{item.titulo}</h3>
                  <p className="text-[#636E72] text-sm mt-1">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dica */}
      <div className="mt-8 mx-5 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="text-sm text-blue-800">
          💡 <strong>Dica:</strong> Este é um cronograma sugerido. Adapte aos horários da sua família e às necessidades do seu bebê.
        </p>
      </div>
    </div>
  );
}