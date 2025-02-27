"use client";

import { ToggleOff } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkMode() {
  const { setMode, mode } = useContext(ThemeContext);
  return (
    <Paper elevation={0} sx={{ height: "100vh", borderRadius: 0 }}>
      Dark Mode
      <Button
        onClick={() => {
          if (mode) {
            setMode(false);
          } else {
            setMode(true);
          }
        }}
      >
        <ToggleOff />
      </Button>
    </Paper>
  );
}
