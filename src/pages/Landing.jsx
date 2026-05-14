import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { UtensilsCrossed, CalendarDays, NotebookPen, ShoppingCart, ArrowRight, Check } from "lucide-react";

const FEATURES = [
  {
    icon: UtensilsCrossed,
    title: "Receitas por Fase",
    desc: "Biblioteca com receitas organizadas por faixa etária, do primeiro purê ao BLW. Adaptadas para cada fase do bebê.",
  },
  {
    icon: CalendarDays,
    title: "Planejamento Semanal",
    desc: "Monte o cardápio da semana inteira em minutos, sem precisar reinventar a roda todo dia.",
  },
  {
    icon: ShoppingCart,
    title: "Lista de Compras",
    desc: "Gerada automaticamente a partir do cardápio planejado. Chega de esquecer ingrediente no mercado.",
  },
  {
    icon: NotebookPen,
    title: "Diário Alimentar",
    desc: "Registre aceitação, reações e evolução diária do bebê. Acompanhe o progresso semana a semana.",
  },
];

const BULLETS = [
  "Receitas validadas por nutricionistas",
  "Sem assinatura para começar",
  "Funciona no celular e no computador",
];

export default function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/receitas", { replace: true });
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <img src="/logo1.png" alt="Papazz" className="h-10 object-contain" />
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link to="/blog" className="hover:text-gray-900 transition">Blog</Link>
            <Link to="/sobre" className="hover:text-gray-900 transition">Sobre</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition px-4 py-2"
            >
              Entrar
            </Link>
            <Link
              to="/login?modo=cadastro"
              className="text-sm font-semibold bg-[#FF6B6B] text-white px-4 py-2 rounded-lg hover:bg-[#ff5252] transition"
            >
              Criar conta
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-5 pt-20 pb-24">
        {/* Favicon icon */}
        <div className="mb-6 w-16 h-16 rounded-2xl bg-[#F3ECFF] flex items-center justify-center">
          <img src="/icon-app.png" alt="" className="w-9 h-9" />
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B21FF] bg-[#F3ECFF] px-3 py-1 rounded-full mb-6">
          Introdução alimentar simplificada
        </span>

        <h1 className="text-4xl md:text-6xl font-titulo font-bold text-gray-900 mb-5 leading-tight max-w-3xl">
          Alimentação saudável<br className="hidden md:block" />
          <span className="text-[#FF6B6B]"> para o seu bebê.</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-xl leading-relaxed">
          Receitas, planejamento de cardápio e diário alimentar. Tudo que você precisa para a introdução alimentar do seu filho, em um só lugar.
        </p>

        {/* Bullets */}
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 text-sm text-gray-500">
          {BULLETS.map((b) => (
            <li key={b} className="flex items-center gap-1.5">
              <Check size={14} className="text-green-500 shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
          <Link
            to="/login?modo=cadastro"
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold px-7 py-3.5 rounded-lg transition text-sm shadow-sm"
          >
            Criar conta grátis
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            Já tenho conta
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Features */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-12">
            O que você encontra no Papazz
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition">
                <div className="w-10 h-10 rounded-lg bg-[#FFF5F5] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#FF6B6B]" />
                </div>
                <h3 className="font-titulo font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* CTA final */}
      <section className="py-20 px-5 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <img src="/logo1.png" alt="Papazz" className="h-12 object-contain mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-titulo font-bold text-gray-900 mb-4">
            Comece hoje mesmo
          </h2>
          <p className="text-gray-500 mb-8">
            Crie sua conta gratuitamente e acesse receitas, planejamento e diário alimentar para o seu bebê.
          </p>
          <Link
            to="/login?modo=cadastro"
            className="inline-flex items-center gap-2 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold px-8 py-3.5 rounded-lg transition text-sm shadow-sm"
          >
            Criar conta grátis
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src="/logo1.png" alt="Papazz" className="h-8 object-contain" />
          <div className="flex gap-5 text-sm text-gray-400">
            <Link to="/sobre" className="hover:text-gray-700 transition">Sobre</Link>
            <Link to="/blog" className="hover:text-gray-700 transition">Blog</Link>
            <Link to="/privacidade" className="hover:text-gray-700 transition">Privacidade</Link>
            <Link to="/termos" className="hover:text-gray-700 transition">Termos</Link>
          </div>
          <p className="text-xs text-gray-400">© 2025 Papazz</p>
        </div>
      </footer>
    </div>
  );
}
