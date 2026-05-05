import { useState } from "react";

const CATEGORIA_MAP = {
  Vegetais:    { emoji: "🥕", from: "#FFB347", to: "#FF8C42" },
  Frutas:      { emoji: "🍌", from: "#A8E063", to: "#56AB2F" },
  Completa:    { emoji: "🍲", from: "#F7971E", to: "#FFD200" },
  Vegetariana: { emoji: "🥦", from: "#56CCF2", to: "#2F80ED" },
  Proteína:    { emoji: "🍗", from: "#D4A574", to: "#C87941" },
  Massas:      { emoji: "🍝", from: "#F6D365", to: "#FDA085" },
  Lanche:      { emoji: "🍪", from: "#FDDB92", to: "#D1FDFF" },
};

const FASE_MAP = {
  "6-8":  { emoji: "🍼", from: "#FFB5A7", to: "#FF8B94" },
  "8-10": { emoji: "🥄", from: "#FFCC7A", to: "#FFA040" },
  "10-12":{ emoji: "🍽️", from: "#B5E7DD", to: "#5CC8B6" },
  "12+":  { emoji: "🍴", from: "#A7D8C9", to: "#3DAA8D" },
};

export default function FotoReceita({ foto, alt, categoria, fase, className = "", style = {} }) {
  const [erro, setErro] = useState(false);

  const info =
    CATEGORIA_MAP[categoria] ||
    FASE_MAP[fase] ||
    { emoji: "🍽️", from: "#E0E0E0", to: "#BDBDBD" };

  if (foto && !erro) {
    return (
      <img
        src={foto}
        alt={alt || ""}
        className={className}
        style={style}
        onError={() => setErro(true)}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(135deg, ${info.from}, ${info.to})`,
        ...style,
      }}
    >
      <span className="text-4xl select-none">{info.emoji}</span>
    </div>
  );
}
