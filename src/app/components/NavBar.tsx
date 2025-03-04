"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

export default function NavBar() {
  const theme = useTheme();

  const navTypographyStyles = {
    flexGrow: 1,
    px: 2,
    fontSize: "1.15rem",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    cursor: "pointer",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          backgroundImage: "none",
          borderBottom: "none",
        }}
        position="static"
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, color: theme.palette.text.primary }}
              >
                JGM
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, color: theme.palette.primary.main }}
              >
                .dev
              </Typography>
            </Box>
            <Box sx={{ display: "flex", cursor: "" }}>
              <Typography component="div" sx={navTypographyStyles}>
                Home
              </Typography>
              <Typography component="div" sx={navTypographyStyles}>
                About
              </Typography>
              <Typography component="div" sx={navTypographyStyles}>
                Skills
              </Typography>
              <Typography component="div" sx={navTypographyStyles}>
                Projects
              </Typography>
              <Typography component="div" sx={navTypographyStyles}>
                Contact
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
