import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="text-6xl mb-6 animate-float">🍼</div>
          <h1 className="text-4xl md:text-5xl font-titulo font-bold text-white mb-4">
            Receitas do Bebê
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-corpo mb-8">
            Introdução alimentar descomplicada
          </p>
          <Link
            to="/receitas"
            className="inline-block px-8 py-4 bg-white text-[#FF6B6B] font-corpo font-bold rounded-[10px] hover:shadow-lg transition"
          >
            Ver Receitas
          </Link>
        </div>
      </div>

      {/* Funcionalidades */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-titulo font-bold text-center text-gray-900 mb-12">
          O que você encontra aqui
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 rounded-[10px]">
            <div className="text-4xl mb-4">🥕</div>
            <h3 className="font-titulo font-bold text-xl text-gray-900 mb-2">
              Receitas Práticas
            </h3>
            <p className="text-gray-600 font-corpo text-sm">
              Receitas testadas e aprovadas para cada fase do seu bebê
            </p>
          </div>

          <div className="text-center p-6 border border-gray-200 rounded-[10px]">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="font-titulo font-bold text-xl text-gray-900 mb-2">
              Cronogramas
            </h3>
            <p className="text-gray-600 font-corpo text-sm">
              Horários e rotinas personalizadas por idade
            </p>
          </div>

          <div className="text-center p-6 border border-gray-200 rounded-[10px]">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-titulo font-bold text-xl text-gray-900 mb-2">
              Conteúdo Educativo
            </h3>
            <p className="text-gray-600 font-corpo text-sm">
              Artigos e guias sobre introdução alimentar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
