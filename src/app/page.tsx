"use client";
import { Box, useTheme } from "@mui/material";
import Hero from "./components/sections/Hero";
import DarkMode from "./components/ui/DarkMode";
import NavBar from "./components/ui/NavBar";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: theme.palette.background.paper,
      }}
    >
      <NavBar />
      <Hero />
      <DarkMode />
    </Box>
  );
}
