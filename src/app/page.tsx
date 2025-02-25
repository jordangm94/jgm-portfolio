"use client";
import { Box, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: theme.palette.background.default,
      }}
    ></Box>
  );
}
