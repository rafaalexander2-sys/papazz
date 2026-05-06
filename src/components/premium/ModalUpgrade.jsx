export default function ModalUpgrade({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[10px] max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com gradiente dourado */}
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-8 text-center relative overflow-hidden">
          {/* Ícone de coroa animado */}
          <div className="text-6xl mb-4 animate-pulse">👑</div>
          <h2 className="text-3xl font-titulo font-bold text-white mb-2">
            Conteúdo Premium
          </h2>
          <p className="text-white/90 font-corpo text-lg">
            Desbloqueie tudo e ajude seu bebê a comer melhor!
          </p>

          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-8">
          {/* Benefícios */}
          <div className="space-y-4 mb-8">
            <BeneficioItem
              icon="🍳"
              titulo="60+ Receitas Premium"
              descricao="Receitas elaboradas com fotos, nutrição completa e dicas de chef"
            />
            <BeneficioItem
              icon="📅"
              titulo="Planejamento Semanal"
              descricao="Monte cardápios da semana e economize tempo"
            />
            <BeneficioItem
              icon="🛒"
              titulo="Lista de Compras Inteligente"
              descricao="Lista automática baseada no seu planejamento"
            />
            <BeneficioItem
              icon="📖"
              titulo="Diário Alimentar"
              descricao="Registre aceitação e acompanhe evolução"
            />
            <BeneficioItem
              icon="🚫"
              titulo="Sem Anúncios"
              descricao="Experiência limpa e focada no seu bebê"
            />
            <BeneficioItem
              icon="📥"
              titulo="Exportar PDFs"
              descricao="Salve receitas e planejamentos para consultar offline"
            />
          </div>

          {/* Planos */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Plano Mensal */}
            <div className="border-2 border-gray-200 rounded-[10px] p-4 text-center hover:border-[#FFD700] transition">
              <p className="text-sm text-gray-600 font-corpo mb-1">Mensal</p>
              <p className="text-3xl font-titulo font-bold text-gray-900">
                R$ 19,90
              </p>
              <p className="text-xs text-gray-500 font-corpo">por mês</p>
            </div>

            {/* Plano Anual (Destaque) */}
            <div className="border-2 border-[#FFD700] bg-yellow-50 rounded-[10px] p-4 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-white text-xs font-bold px-3 py-1 rounded-full">
                Economize 37%
              </div>
              <p className="text-sm text-gray-600 font-corpo mb-1">Anual</p>
              <p className="text-3xl font-titulo font-bold text-gray-900">
                R$ 149
              </p>
              <p className="text-xs text-gray-500 font-corpo">R$ 12,42/mês</p>
            </div>
          </div>

          {/* Botão de Upgrade */}
          <button className="w-full bg-gradient-to-br from-[#FFB06B] to-[#FF6B6B] text-white font-corpo font-bold py-4 rounded-[10px] hover:shadow-lg transition mb-4">
            Assinar Premium Agora
          </button>

          {/* Garantia */}
          <p className="text-center text-sm text-gray-500 font-corpo">
            ✅ Garantia de 7 dias • Cancele quando quiser
          </p>
        </div>
      </div>
    </div>
  );
}

// Componente de item de benefício
function BeneficioItem({ icon, titulo, descricao }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0 w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h3 className="font-corpo font-bold text-gray-900 text-sm mb-1">
          {titulo}
        </h3>
        <p className="font-corpo text-gray-600 text-xs leading-relaxed">
          {descricao}
        </p>
      </div>
    </div>
  );
}
