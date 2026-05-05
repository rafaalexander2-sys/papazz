import { createContext, useContext, useState, useEffect } from "react";

const PlanejamentoContext = createContext({});

export function PlanejamentoProvider({ children }) {
  const [plano, setPlano] = useState(() => {
    try {
      const saved = localStorage.getItem("papazz_planejamento");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("papazz_planejamento", JSON.stringify(plano));
  }, [plano]);

  const chave = (dia, refeicao) => `${dia}|${refeicao}`;

  const adicionarReceita = (dia, refeicao, receita) => {
    setPlano((prev) => ({
      ...prev,
      [chave(dia, refeicao)]: {
        id: receita.id,
        nome: receita.nome,
        foto: receita.foto,
        categoria: receita.categoria,
        fase: receita.fase,
        ingredientes: receita.ingredientes,
      },
    }));
  };

  const removerReceita = (dia, refeicao) => {
    setPlano((prev) => {
      const next = { ...prev };
      delete next[chave(dia, refeicao)];
      return next;
    });
  };

  const limparPlano = () => setPlano({});

  // Receitas únicas no plano (sem duplicatas por id)
  const receitasUnicas = () => {
    const mapa = new Map();
    Object.values(plano).forEach((r) => {
      if (!mapa.has(r.id)) mapa.set(r.id, r);
    });
    return [...mapa.values()];
  };

  return (
    <PlanejamentoContext.Provider
      value={{ plano, adicionarReceita, removerReceita, limparPlano, receitasUnicas, chave }}
    >
      {children}
    </PlanejamentoContext.Provider>
  );
}

export function usePlanejamento() {
  return useContext(PlanejamentoContext);
}
