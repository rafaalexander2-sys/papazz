import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function ModalUpgrade({ onClose }) {
  const { user } = useAuth();
  const [planoSelecionado, setPlanoSelecionado] = useState("anual");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function assinar() {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    setLoading(true);
    setErro("");

    try {
      const res = await fetch("/api/mp-criar-preferencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plano: planoSelecionado,
          uid: user.uid,
          email: user.email,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.init_point) {
        throw new Error(data.error || "Erro ao iniciar pagamento");
      }

      window.location.href = data.init_point;
    } catch (err) {
      setErro(err.message);
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[10px] max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-8 text-center relative overflow-hidden">
          <div className="text-6xl mb-4 animate-pulse">👑</div>
          <h2 className="text-3xl font-titulo font-bold text-white mb-2">
            Conteudo Premium
          </h2>
          <p className="text-white/90 font-corpo text-lg">
            Desbloqueie tudo e ajude seu bebe a comer melhor.
          </p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="space-y-4 mb-8">
            <BeneficioItem titulo="60+ Receitas Premium" descricao="Receitas elaboradas com fotos e valor nutricional" />
            <BeneficioItem titulo="Planejamento Semanal" descricao="Monte cardapios da semana e economize tempo" />
            <BeneficioItem titulo="Lista de Compras Inteligente" descricao="Lista automatica baseada no seu planejamento" />
            <BeneficioItem titulo="Diario Alimentar" descricao="Registre aceitacao e acompanhe evolucao" />
            <BeneficioItem titulo="Sem Anuncios" descricao="Experiencia limpa e focada no seu bebe" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setPlanoSelecionado("mensal")}
              className={`border-2 rounded-[10px] p-4 text-center transition ${
                planoSelecionado === "mensal"
                  ? "border-[#FF6B6B] bg-red-50"
                  : "border-gray-200 hover:border-[#FFD700]"
              }`}
            >
              <p className="text-sm text-gray-600 font-corpo mb-1">Mensal</p>
              <p className="text-3xl font-titulo font-bold text-gray-900">R$ 19,90</p>
              <p className="text-xs text-gray-500 font-corpo">por mes</p>
            </button>

            <button
              onClick={() => setPlanoSelecionado("anual")}
              className={`border-2 rounded-[10px] p-4 text-center relative transition ${
                planoSelecionado === "anual"
                  ? "border-[#FF6B6B] bg-red-50"
                  : "border-[#FFD700] bg-yellow-50"
              }`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                Economize 37%
              </div>
              <p className="text-sm text-gray-600 font-corpo mb-1">Anual</p>
              <p className="text-3xl font-titulo font-bold text-gray-900">R$ 149</p>
              <p className="text-xs text-gray-500 font-corpo">R$ 12,42/mes</p>
            </button>
          </div>

          {erro && (
            <p className="text-red-500 font-corpo text-sm text-center mb-4">{erro}</p>
          )}

          <button
            onClick={assinar}
            disabled={loading}
            className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] disabled:opacity-60 text-white font-corpo font-bold py-4 rounded-[10px] transition mb-4"
          >
            {loading ? "Aguarde..." : "Assinar Premium Agora"}
          </button>

          <p className="text-center text-sm text-gray-500 font-corpo">
            Garantia de 7 dias. Cancele quando quiser.
          </p>
        </div>
      </div>
    </div>
  );
}

function BeneficioItem({ titulo, descricao }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#FF6B6B]" />
      <div>
        <h3 className="font-corpo font-bold text-gray-900 text-sm mb-0.5">{titulo}</h3>
        <p className="font-corpo text-gray-600 text-xs leading-relaxed">{descricao}</p>
      </div>
    </div>
  );
}
