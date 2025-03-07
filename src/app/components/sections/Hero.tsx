"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import HeroPhoto from "../../../../public/hero_photo.jpg";

export default function Hero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: theme.palette.text.primary }}
        >
          I'm Jordan Martinez!
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "300px", md: "650px", lg: "400px" },
          height: { xs: "300px", md: "650px", lg: "400px" },
          position: "relative",
        }}
      >
        <Image
          src={HeroPhoto}
          alt="Profile Picture"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Box>
  );
}
