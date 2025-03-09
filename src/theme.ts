"use client";
import { createTheme } from "@mui/material/styles";

const mainThemeColor = "#D97904";
const themeFont = "Inter, sans-serif";

export const lightTheme = createTheme({
  typography: {
    fontFamily: themeFont,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: mainThemeColor,
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#1C1C1C",
      secondary: mainThemeColor,
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: themeFont,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: mainThemeColor,
    },
    background: {
      default: "#1C1C1C",
      paper: "#2A2A2A",
    },
    text: {
      primary: "#D4D4D4",
      secondary: mainThemeColor,
    },
  },
});
