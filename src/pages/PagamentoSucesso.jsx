import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PagamentoSucesso() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/inicio"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="text-6xl mb-6">✅</div>
      <h1 className="font-titulo text-3xl font-bold text-gray-900 mb-3">
        Pagamento confirmado!
      </h1>
      <p className="font-corpo text-gray-600 mb-2">
        Seu acesso premium esta sendo ativado.
      </p>
      <p className="font-corpo text-sm text-gray-400">
        Redirecionando em alguns segundos...
      </p>
    </div>
  );
}
