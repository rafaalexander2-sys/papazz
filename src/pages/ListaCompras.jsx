import { useAuth } from "../context/AuthContext";
import { useListaCompras } from "../context/ListaComprasContext";
import { useState } from "react";
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
              Adicione ingredientes direto das receitas e nunca esqueça nada no mercado!
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
  const { itens, toggleComprado, removerItem, limparComprados, limparTudo } =
    useListaCompras();

  const pendentes = itens.filter((i) => !i.comprado);
  const comprados = itens.filter((i) => i.comprado);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-b">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🛒</span>
            <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white">
              Lista de Compras
            </h1>
          </div>
          <p className="text-white/90 font-corpo">
            {pendentes.length} item{pendentes.length !== 1 ? "s" : ""} pendente
            {pendentes.length !== 1 ? "s" : ""}
            {comprados.length > 0 && ` · ${comprados.length} comprado${comprados.length !== 1 ? "s" : ""}`}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        {itens.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-titulo font-bold text-gray-900 mb-2">
              Lista vazia
            </h2>
            <p className="text-gray-500 font-corpo">
              Abra uma receita e clique em &quot;Adicionar à lista&quot; para começar.
            </p>
          </div>
        ) : (
          <>
            {/* Ações */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {comprados.length > 0 && (
                <button
                  onClick={limparComprados}
                  className="px-4 py-2 text-sm font-corpo font-semibold text-gray-700 border border-gray-300 rounded-[10px] hover:bg-gray-50 transition"
                >
                  Remover comprados ({comprados.length})
                </button>
              )}
              <button
                onClick={limparTudo}
                className="px-4 py-2 text-sm font-corpo font-semibold text-red-600 border border-red-200 rounded-[10px] hover:bg-red-50 transition"
              >
                Limpar tudo
              </button>
            </div>

            {/* Pendentes */}
            {pendentes.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-corpo font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Para comprar
                </h2>
                <div className="space-y-2">
                  {pendentes.map((item) => (
                    <ItemLista
                      key={item.id}
                      item={item}
                      onToggle={toggleComprado}
                      onRemover={removerItem}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Comprados */}
            {comprados.length > 0 && (
              <div>
                <h2 className="text-sm font-corpo font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Comprados
                </h2>
                <div className="space-y-2 opacity-60">
                  {comprados.map((item) => (
                    <ItemLista
                      key={item.id}
                      item={item}
                      onToggle={toggleComprado}
                      onRemover={removerItem}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ItemLista({ item, onToggle, onRemover }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-[10px] group hover:border-gray-300 transition">
      <button
        onClick={() => onToggle(item.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
          item.comprado
            ? "bg-green-500 border-green-500 text-white"
            : "border-gray-300 hover:border-green-400"
        }`}
      >
        {item.comprado && (
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={`font-corpo font-medium text-gray-900 ${
            item.comprado ? "line-through text-gray-400" : ""
          }`}
        >
          {item.nome}
        </p>
        {item.receita && (
          <p className="text-xs text-gray-400 font-corpo truncate">
            {item.receita}
          </p>
        )}
      </div>

      <button
        onClick={() => onRemover(item.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition p-1"
        aria-label="Remover"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
