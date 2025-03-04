"use client";

import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkMode() {
  const { setMode, mode } = useContext(ThemeContext);
  return (
    <Paper elevation={0} sx={{ height: "100vh", borderRadius: 0 }}>
      <IconButton
        onClick={() => {
          if (mode) {
            setMode(false);
          } else {
            setMode(true);
          }
        }}
        sx={{
          position: "fixed",
          zIndex: 999,
          right: 0,
          top: "85px",
          padding: "0.5rem 0.75rem",
          borderRadius: "1rem 0 0 1rem",
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 2,
          transition: "all 0.5s ease",
          "&:hover": {
            bgcolor: "primary.main",
            color: "background.paper",
          },
        }}
      >
        {mode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Paper>
  );
}
