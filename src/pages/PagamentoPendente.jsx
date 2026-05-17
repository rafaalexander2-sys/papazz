import { useNavigate } from "react-router-dom";

export default function PagamentoPendente() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="text-6xl mb-6">⏳</div>
      <h1 className="font-titulo text-3xl font-bold text-gray-900 mb-3">
        Pagamento em processamento
      </h1>
      <p className="font-corpo text-gray-600 mb-2">
        Seu pagamento esta sendo analisado.
      </p>
      <p className="font-corpo text-sm text-gray-500 mb-6">
        Assim que confirmado, seu acesso premium sera ativado automaticamente.
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
