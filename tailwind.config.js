/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Tipografia ──────────────────────────────────────────────
      fontFamily: {
        titulo: ["Nunito", "sans-serif"],
        corpo:  ["Nunito", "sans-serif"],
      },

      // ─── Cores ───────────────────────────────────────────────────
      colors: {
        primary: {
          DEFAULT: "#FF6B6B",
          light:   "#FF8B8B",
          dark:    "#FF5252",
        },
        premium: {
          DEFAULT: "#FFD700",
          amber:   "#FFA500",
        },
        brand: {
          pink:   "#FF8B94",
          peach:  "#FFB5A7",
          cream:  "#FFF9F0",
          muted:  "#636E72",
          subtle: "#FFF5F5",
        },
      },

      // ─── Border radius ───────────────────────────────────────────
      borderRadius: {
        brand:    "10px",
        "brand-sm": "8px",
        "brand-xs": "6px",
      },

      // ─── Gradientes ──────────────────────────────────────────────
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #FF6B6B, #FF8B8B)",
        "gradient-premium": "linear-gradient(to right, #FFD700, #FFA500)",
        "gradient-header":  "linear-gradient(to right, #FF8B94, #FFB5A7)",
      },
    },
  },
  plugins: [],
}
