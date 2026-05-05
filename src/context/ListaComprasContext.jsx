import { createContext, useContext, useState, useEffect } from "react";

const ListaComprasContext = createContext({});

export function ListaComprasProvider({ children }) {
  const [itens, setItens] = useState(() => {
    try {
      const saved = localStorage.getItem("papazz_lista_compras");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("papazz_lista_compras", JSON.stringify(itens));
  }, [itens]);

  const adicionarIngredientes = (ingredientes, nomeReceita) => {
    const novos = ingredientes
      .filter((ing) => !itens.some((item) => item.nome === ing))
      .map((ing) => ({
        id: Date.now() + Math.random(),
        nome: ing,
        comprado: false,
        receita: nomeReceita,
      }));
    setItens((prev) => [...prev, ...novos]);
    return novos.length;
  };

  const toggleComprado = (id) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const removerItem = (id) => {
    setItens((prev) => prev.filter((item) => item.id !== id));
  };

  const limparComprados = () => {
    setItens((prev) => prev.filter((item) => !item.comprado));
  };

  const limparTudo = () => setItens([]);

  return (
    <ListaComprasContext.Provider
      value={{
        itens,
        adicionarIngredientes,
        toggleComprado,
        removerItem,
        limparComprados,
        limparTudo,
      }}
    >
      {children}
    </ListaComprasContext.Provider>
  );
}

export function useListaCompras() {
  return useContext(ListaComprasContext);
}
