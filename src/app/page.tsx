"use client";
import { Box } from "@mui/material";
import DarkMode from "./components/DarkMode";

export default function Home() {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <DarkMode />
    </Box>
  );
}
