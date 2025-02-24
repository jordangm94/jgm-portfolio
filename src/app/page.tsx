"use client";
import { useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      The HOME page route is working
    </div>
  );
}
