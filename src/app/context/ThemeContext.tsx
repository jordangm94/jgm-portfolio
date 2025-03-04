"use client";

import { darkTheme, lightTheme } from "@/theme";
import { Theme, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextType = {
  mode: boolean;
  setMode: (mode: boolean) => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: false,
  setMode: () => {},
  theme: lightTheme,
});

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const prefersMode = useMediaQuery("(prefers-color-scheme: dark");
  const [mode, setMode] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setMode(prefersMode);
    setHydrated(true);
  }, [prefersMode]);

  const theme = mode ? darkTheme : lightTheme;

  if (!hydrated) return null;

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
