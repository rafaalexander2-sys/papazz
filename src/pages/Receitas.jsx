import { useState } from "react";
import { Link } from "react-router-dom";

export default function Receitas() {
  const [faseSelecionada, setFaseSelecionada] = useState("6-8");
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  const fases = [
    { id: "6-8", nome: "6-8 meses", cor: "from-[#FF8B94] to-[#FFB5A7]" },
    { id: "8-10", nome: "8-10 meses", cor: "from-[#FFB347] to-[#FFCC7A]" },
    { id: "10-12", nome: "10-12 meses", cor: "from-[#C9E4DE] to-[#B5E7DD]" },
    { id: "12+", nome: "12+ meses", cor: "from-[#B5E7DD] to-[#A7D8C9]" },
  ];

  const receitas = [
    {
      id: 1,
      nome: "Papa de Cenoura",
      fase: "6-8",
      tempo: "20 min",
      dificuldade: "Fácil",
      ingredientes: ["2 cenouras médias", "1 fio de azeite", "Água"],
      preparo: [
        "Descasque e corte as cenouras em rodelas",
        "Cozinhe em água fervente por 15 minutos",
        "Amasse com garfo até formar papa",
        "Adicione um fio de azeite"
      ]
    },
    {
      id: 2,
      nome: "Purê de Batata",
      fase: "6-8",
      tempo: "25 min",
      dificuldade: "Fácil",
      ingredientes: ["2 batatas médias", "1 colher de azeite"],
      preparo: [
        "Descasque e corte as batatas",
        "Cozinhe até ficarem macias",
        "Amasse bem",
        "Misture com azeite"
      ]
    },
    {
      id: 3,
      nome: "Banana Amassada",
      fase: "8-10",
      tempo: "5 min",
      dificuldade: "Muito Fácil",
      ingredientes: ["1 banana madura"],
      preparo: [
        "Descasque a banana",
        "Amasse com garfo",
        "Sirva imediatamente"
      ]
    },
    {
      id: 4,
      nome: "Arroz com Legumes",
      fase: "8-10",
      tempo: "30 min",
      dificuldade: "Média",
      ingredientes: ["1/2 xícara de arroz", "Cenoura picada", "Abobrinha picada", "1 colher de azeite"],
      preparo: [
        "Refogue os legumes no azeite",
        "Adicione o arroz e água",
        "Cozinhe por 20 minutos",
        "Amasse levemente"
      ]
    },
    {
      id: 5,
      nome: "Macarrão com Frango",
      fase: "10-12",
      tempo: "35 min",
      dificuldade: "Média",
      ingredientes: ["Macarrão parafuso", "Peito de frango", "Cenoura", "Azeite"],
      preparo: [
        "Cozinhe o macarrão",
        "Cozinhe o frango e desfie",
        "Refogue com cenoura ralada",
        "Misture tudo"
      ]
    },
    {
      id: 6,
      nome: "Panqueca de Banana",
      fase: "12+",
      tempo: "15 min",
      dificuldade: "Fácil",
      ingredientes: ["1 banana", "1 ovo", "2 colheres de aveia"],
      preparo: [
        "Amasse a banana",
        "Misture com ovo e aveia",
        "Frite em frigideira antiaderente",
        "Vire quando dourar"
      ]
    },
  ];

  const receitasFiltradas = receitas.filter(r => r.fase === faseSelecionada);

  return (
    <div className="bg-[#FFF9F0] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] text-white p-5">
        <Link to="/" className="text-2xl">←</Link>
        <h1 className="text-2xl font-bold text-center mt-2">Receitas</h1>
      </div>

      {/* Filtro de Fases */}
      <div className="overflow-x-auto px-5 py-4">
        <div className="flex gap-3">
          {fases.map(fase => (
            <button
              key={fase.id}
              onClick={() => setFaseSelecionada(fase.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap font-semibold transition-all ${
                faseSelecionada === fase.id
                  ? `bg-gradient-to-r ${fase.cor} text-white shadow-lg scale-105`
                  : 'bg-white text-[#636E72] shadow'
              }`}
            >
              {fase.nome}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Receitas */}
      <div className="px-5 space-y-4">
        {receitasFiltradas.map(receita => (
          <div
            key={receita.id}
            onClick={() => setReceitaSelecionada(receita)}
            className="bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-[#333] text-lg">{receita.nome}</h3>
            <div className="flex gap-4 mt-2 text-sm text-[#636E72]">
              <span>⏰ {receita.tempo}</span>
              <span>📊 {receita.dificuldade}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Receita */}
      {receitaSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50">
          <div className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-[#333]">{receitaSelecionada.nome}</h2>
              <button
                onClick={() => setReceitaSelecionada(null)}
                className="text-3xl text-[#636E72] hover:text-[#333]"
              >
                ×
              </button>
            </div>

            <div className="flex gap-4 mb-6 text-sm text-[#636E72]">
              <span>⏰ {receitaSelecionada.tempo}</span>
              <span>📊 {receitaSelecionada.dificuldade}</span>
              <span>👶 {receitaSelecionada.fase} meses</span>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg text-[#333] mb-3">Ingredientes:</h3>
              <ul className="space-y-2">
                {receitaSelecionada.ingredientes.map((ing, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span className="text-[#636E72]">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-[#333] mb-3">Modo de Preparo:</h3>
              <ol className="space-y-3">
                {receitaSelecionada.preparo.map((passo, i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-[#FF6B6B] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[#636E72] pt-0.5">{passo}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}