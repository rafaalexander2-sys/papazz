import { createContext, useContext, useState, useEffect } from "react";

const DiarioContext = createContext({});

export function DiarioProvider({ children }) {
  const [registros, setRegistros] = useState(() => {
    try {
      const saved = localStorage.getItem("papazz_diario");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("papazz_diario", JSON.stringify(registros));
  }, [registros]);

  const adicionarRegistro = (registro) => {
    setRegistros((prev) => [
      { ...registro, id: Date.now() },
      ...prev,
    ]);
  };

  const removerRegistro = (id) => {
    setRegistros((prev) => prev.filter((r) => r.id !== id));
  };

  // Stats globais
  const stats = () => {
    const total = registros.length;
    if (total === 0) return { total: 0, boa: 0, media: 0, ruim: 0, pctBoa: 0, pctMedia: 0, pctRuim: 0 };
    const boa = registros.filter((r) => r.aceitacao === "boa").length;
    const media = registros.filter((r) => r.aceitacao === "media").length;
    const ruim = registros.filter((r) => r.aceitacao === "ruim").length;
    return {
      total,
      boa,
      media,
      ruim,
      pctBoa: Math.round((boa / total) * 100),
      pctMedia: Math.round((media / total) * 100),
      pctRuim: Math.round((ruim / total) * 100),
    };
  };

  // Stats por refeição
  const statsPorRefeicao = () => {
    const refeicoes = ["Café da Manhã", "Lanche Manhã", "Almoço", "Lanche Tarde", "Jantar"];
    return refeicoes.map((ref) => {
      const grupo = registros.filter((r) => r.refeicao === ref);
      const total = grupo.length;
      if (total === 0) return { refeicao: ref, total: 0, pctBoa: 0, pctMedia: 0, pctRuim: 0 };
      const boa = grupo.filter((r) => r.aceitacao === "boa").length;
      const media = grupo.filter((r) => r.aceitacao === "media").length;
      const ruim = grupo.filter((r) => r.aceitacao === "ruim").length;
      return {
        refeicao: ref,
        total,
        pctBoa: Math.round((boa / total) * 100),
        pctMedia: Math.round((media / total) * 100),
        pctRuim: Math.round((ruim / total) * 100),
      };
    }).filter((r) => r.total > 0);
  };

  // Alimentos mais recusados
  const alimentosRecusados = () => {
    const mapa = {};
    registros
      .filter((r) => r.aceitacao === "ruim")
      .forEach((r) => { mapa[r.alimento] = (mapa[r.alimento] || 0) + 1; });
    return Object.entries(mapa)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([nome, count]) => ({ nome, count }));
  };

  // Alimentos mais amados
  const alimentosAmados = () => {
    const mapa = {};
    registros
      .filter((r) => r.aceitacao === "boa")
      .forEach((r) => { mapa[r.alimento] = (mapa[r.alimento] || 0) + 1; });
    return Object.entries(mapa)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([nome, count]) => ({ nome, count }));
  };

  const exportarCSV = () => {
    const linhas = [
      ["Data", "Refeição", "Alimento", "Aceitação", "Observação"],
      ...registros.map((r) => [
        r.data,
        r.refeicao,
        r.alimento,
        r.aceitacao === "boa" ? "Adorou" : r.aceitacao === "media" ? "Normal" : "Recusou",
        r.observacao || "",
      ]),
    ];
    const csv = linhas.map((l) => l.map((v) => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "diario-alimentar-papazz.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DiarioContext.Provider
      value={{ registros, adicionarRegistro, removerRegistro, stats, statsPorRefeicao, alimentosRecusados, alimentosAmados, exportarCSV }}
    >
      {children}
    </DiarioContext.Provider>
  );
}

export function useDiario() {
  return useContext(DiarioContext);
}
