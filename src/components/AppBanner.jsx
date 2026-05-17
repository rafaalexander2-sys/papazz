import { useState } from "react";
import { usePlatform } from "../context/PlatformContext";

export default function AppBanner() {
  const { isWeb } = usePlatform();
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem("appBannerDismissed") === "true"
  );

  if (!isWeb || dismissed) return null;

  function dismiss() {
    localStorage.setItem("appBannerDismissed", "true");
    setDismissed(true);
  }

  return (
    <div className="bg-[#FF6B6B] text-white px-4 py-3 flex items-center justify-between gap-3">
      <p className="font-corpo text-sm">
        Baixe o Papazz no seu celular para uma experiencia melhor.
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="https://play.google.com/store/apps/details?id=br.com.papazz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#FF6B6B] font-corpo font-bold text-xs px-3 py-1.5 rounded-[10px] hover:bg-gray-100 transition"
        >
          Baixar
        </a>
        <button
          onClick={dismiss}
          className="text-white/80 hover:text-white text-lg leading-none"
          aria-label="Fechar"
        >
          x
        </button>
      </div>
    </div>
  );
}
