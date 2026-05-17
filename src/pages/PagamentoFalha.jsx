import { useNavigate } from "react-router-dom";

export default function PagamentoFalha() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="text-6xl mb-6">❌</div>
      <h1 className="font-titulo text-3xl font-bold text-gray-900 mb-3">
        Pagamento nao concluido
      </h1>
      <p className="font-corpo text-gray-600 mb-6">
        Nenhum valor foi cobrado. Tente novamente.
      </p>
      <button
        onClick={() => navigate("/inicio")}
        className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-corpo font-bold px-6 py-3 rounded-[10px] transition"
      >
        Voltar ao inicio
      </button>
    </div>
  );
}
