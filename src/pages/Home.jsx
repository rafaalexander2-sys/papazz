import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [idade, setIdade] = useState(9);
  const [mostrarPremium, setMostrarPremium] = useState(false);

  const getFase = (meses) => {
    if (meses <= 8) return "6-8";
    if (meses <= 10) return "8-10";
    if (meses <= 12) return "10-12";
    return "12+";
  };

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

        <Link
          to="/login"
          className="inline-block mt-3 bg-gradient-to-br from-[#FFB06B] to-[#FF6B6B] text-white px-6 py-3 rounded-[10px] shadow font-semibold hover:shadow-lg transition-shadow"
        >
          👑 Premium
        </Link>
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

          <div className="mt-4 text-[#FF6B6B] font-bold">👶 {idade} meses</div>

          <div className="text-sm text-[#636E72]">
            Fase: {getFase(idade)} meses
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: "👨‍🍳",
              title: "Receitas",
              link: "/receitas",
              premium: false,
            },
            {
              icon: "⏰",
              title: "Cronograma",
              link: "/cronograma",
              premium: false,
            },
            {
              icon: "📅",
              title: "Planejamento",
              link: "/planejamento",
              premium: true,
            },
            {
              icon: "🛒",
              title: "Lista",
              link: "/lista-compras",
              premium: true,
            },
            { icon: "📖", title: "Diário", link: "/diario", premium: true },
            { icon: "📚", title: "Blog", link: "/blog", premium: false },
          ].map((item, i) => {
            const CardContent = (
              <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-lg transition-shadow cursor-pointer relative">
                {item.premium && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    👑
                  </div>
                )}
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-[#333]">
                  {item.title}
                </p>
              </div>
            );

            return (
              <Link key={i} to={item.link}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
