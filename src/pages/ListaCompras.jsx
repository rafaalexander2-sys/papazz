import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ModalUpgrade from "../components/premium/ModalUpgrade";

export default function ListaCompras() {
  const { isPremium } = useAuth();
  const [mostrarUpgrade, setMostrarUpgrade] = useState(false);

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-[10px] p-8 shadow-lg">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-2xl font-titulo font-bold text-gray-900 mb-3">
              Lista de Compras
            </h1>
            <p className="text-gray-600 font-corpo mb-6 leading-relaxed">
              Lista automática baseada no planejamento. Nunca esqueça
              ingredientes!
            </p>
            <button
              onClick={() => setMostrarUpgrade(true)}
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-corpo font-bold py-3 rounded-[10px] hover:shadow-lg transition"
            >
              Desbloquear Premium
            </button>
          </div>
        </div>
        {mostrarUpgrade && (
          <ModalUpgrade onClose={() => setMostrarUpgrade(false)} />
        )}
      </div>
    );
  }

  return <ListaComprasPremium />;
}

function ListaComprasPremium() {
  const [itens] = useState([
    {
      id: 1,
      nome: "Batata doce",
      quantidade: "3 unidades",
      categoria: "Hortifruti",
      comprado: false,
    },
    {
      id: 2,
      nome: "Frango orgânico",
      quantidade: "500g",
      categoria: "Açougue",
      comprado: false,
    },
    {
      id: 3,
      nome: "Abóbora",
      quantidade: "1 unidade",
      categoria: "Hortifruti",
      comprado: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-b">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🛒</span>
            <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white">
              Lista de Compras
            </h1>
          </div>
          <p className="text-lg text-white/90 font-corpo">
            Gerada automaticamente do seu planejamento
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-4">
          {itens.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white border rounded-[10px]"
            >
              <input type="checkbox" className="w-5 h-5" />
              <div className="flex-1">
                <p className="font-corpo font-semibold text-gray-900">
                  {item.nome}
                </p>
                <p className="text-sm text-gray-500">{item.quantidade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
