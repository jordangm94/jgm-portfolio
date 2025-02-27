"use client";

import { ReactNode } from "react";
import ComponentWrapper from "./ComponentWrapper";
import ThemeContextProvider from "./ThemeContext";

type ContextProviderProps = {
  children: ReactNode;
};

export default function ContextProviders({ children }: ContextProviderProps) {
  return (
    <ThemeContextProvider>
      <ComponentWrapper>{children}</ComponentWrapper>
    </ThemeContextProvider>
  );
}
