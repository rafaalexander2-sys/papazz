import { createContext, useContext } from "react";
import { isAppVersion } from "../utils/platform";

const PlatformContext = createContext(null);

export function PlatformProvider({ children }) {
  const isApp = isAppVersion();

  return (
    <PlatformContext.Provider value={{ isApp, isWeb: !isApp }}>
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  return useContext(PlatformContext);
}
