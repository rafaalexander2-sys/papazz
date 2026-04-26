export default function ModalPremium({ onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white p-6 rounded-t-3xl text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl hover:scale-110 transition-transform"
          >
            ×
          </button>
          <div className="text-5xl mb-3 animate-pulse">👑</div>
          <h2 className="text-3xl font-bold mb-2">Papazz Premium</h2>
          <p className="text-white/90">Desbloqueie todo o potencial do app</p>
        </div>

        {/* Planos */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Plano Mensal */}
            <div className="border-2 border-[#E1E8ED] rounded-2xl p-5 hover:border-[#FF6B6B] transition-colors">
              <h3 className="font-bold text-xl text-[#333] mb-2">Mensal</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#FF6B6B]">R$ 19,90</span>
                <span className="text-[#636E72]">/mês</span>
              </div>
              <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8B8B] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                Assinar Mensal
              </button>
            </div>

            {/* Plano Anual - DESTAQUE */}
            <div className="border-2 border-[#FFD700] rounded-2xl p-5 bg-gradient-to-br from-[#FFF9E6] to-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-white px-4 py-1 rounded-full text-sm font-bold">
                🔥 Melhor Oferta
              </div>
              <h3 className="font-bold text-xl text-[#333] mb-2">Anual</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-[#FFD700]">R$ 149</span>
                <span className="text-[#636E72]">/ano</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mb-4">
                Economize R$ 89,80 (37%)
              </p>
              <button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                Assinar Anual
              </button>
            </div>
          </div>

          {/* Benefícios */}
          <div className="bg-[#FFF9F0] rounded-2xl p-5 mb-4">
            <h3 className="font-bold text-lg text-[#333] mb-4">O que você ganha:</h3>
            <ul className="space-y-3">
              {[
                "200+ receitas exclusivas com fotos",
                "Planejamento semanal personalizado",
                "Lista de compras automática",
                "Diário alimentar com tracking",
                "Cronogramas detalhados por idade",
                "Guia IA para tirar dúvidas",
                "Exportar PDFs das receitas",
                "Sem anúncios"
              ].map((beneficio, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-[#636E72]">{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Garantia */}
          <div className="text-center text-sm text-[#636E72] border-t pt-4">
            <p className="mb-1">💚 Garantia de 7 dias - cancele quando quiser</p>
            <p>Pagamento 100% seguro via Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
}