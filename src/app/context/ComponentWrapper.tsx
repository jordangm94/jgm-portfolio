"use client";

import { ThemeProvider } from "@mui/material";
import { ReactNode, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

type ComponentWrapperProps = {
  children: ReactNode;
};

export default function ComponentWrapper({ children }: ComponentWrapperProps) {
  const { theme } = useContext(ThemeContext);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
