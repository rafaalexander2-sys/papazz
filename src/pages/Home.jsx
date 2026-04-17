import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [idade, setIdade] = useState(9);

  const getFase = (meses) => {
    if (meses <= 8) return "6-8";
    if (meses <= 10) return "8-10";
    if (meses <= 12) return "10-12";
    return "12+";
  };

  const receitas = [
    { nome: "Papa de Cenoura", fase: "6-8" },
    { nome: "Purê de Batata", fase: "6-8" },
    { nome: "Banana Amassada", fase: "8-10" },
    { nome: "Arroz com Legumes", fase: "8-10" },
    { nome: "Macarrão com Frango", fase: "10-12" },
    { nome: "Panqueca de Banana", fase: "12+" },
  ];

  const receitasFiltradas = receitas.filter(
    (r) => r.fase === getFase(idade)
  );

  return (
    <div className="bg-[#FFF9F0] min-h-screen">
      <div className="text-center pt-8 pb-2 px-5">
        <div className="flex justify-center -mb-6">
          <img 
            src="/logo1.png" 
            alt="Papazz"
            className="h-24 sm:h-28 object-contain"
          />
        </div>

        <p className="text-[#636E72] text-sm sm:text-base font-medium mt-1">
          Cada mordida, uma descoberta
        </p>

        <button className="mt-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8B8B] text-white px-6 py-3 rounded-full shadow font-semibold">
          👑 Premium
        </button>
      </div>

      <div className="max-w-md sm:max-w-4xl mx-auto px-5 py-6">
        <div className="bg-white p-5 rounded-xl shadow mb-6 text-center">
          <p className="text-[#333] font-semibold mb-4">
            Qual a idade do seu bebê?
          </p>

          <input
            type="range"
            min="6"
            max="18"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
            className="w-full accent-[#FF6B6B]"
          />

          <div className="mt-4 text-[#FF6B6B] font-bold">
            👶 {idade} meses
          </div>

          <div className="text-sm text-[#636E72]">
            Fase: {getFase(idade)} meses
          </div>
        </div>

        

        <div>
          <h2 className="text-lg font-bold text-[#333] mb-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
  {[
    { icon: "👨‍🍳", title: "Receitas", link: "/receitas" },
    { icon: "⏰", title: "Cronograma", link: "/cronograma" },
    { icon: "📅", title: "Planejamento", link: null },
    { icon: "🛒", title: "Lista", link: null },
    { icon: "📖", title: "Diário", link: null },
    { icon: "💡", title: "Guia IA", link: null },
  ].map((item, i) => {
    const CardContent = (
      <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-lg transition-shadow cursor-pointer">
        <div className="text-2xl mb-2">{item.icon}</div>
        <p className="text-sm font-semibold text-[#333]">
          {item.title}
        </p>
      </div>
    );

    return item.link ? (
      <Link key={i} to={item.link}>
        {CardContent}
      </Link>
    ) : (
      <div key={i}>
        {CardContent}
      </div>
    );
  })}
</div>    Receitas recomendadas
          </h2>

          <div className="grid gap-4">
            {receitasFiltradas.map((r, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow"
              >
                <p className="font-semibold text-[#333]">{r.nome}</p>
                <p className="text-xs text-[#636E72]">
                  Fase: {r.fase} meses
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}