"use client";

import { darkTheme, lightTheme } from "@/theme";
import { createTheme, Theme, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextType = {
  mode: boolean;
  setMode: (mode: boolean) => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: false,
  setMode: () => {},
  theme: createTheme({ palette: { mode: "light" } }),
});

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const prefersMode = useMediaQuery("(prefers-color-scheme: light");
  const [mode, setMode] = useState(prefersMode);

  useEffect(() => {
    setMode(prefersMode);
  }, [prefersMode]);

  const theme = mode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
