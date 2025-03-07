"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {/* Desktop Navigation*/}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
            {/* Mobile Navigation */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      backgroundImage: "none",
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      borderRadius: "8px",
                    },
                  },
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Skills</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
