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
        flexDirection: { xs: "column-reverse", lg: "row" },
        justifyContent: { xs: "center" },
        alignItems: "center",
        width: "100%",
        gap: { xs: 4, lg: 15 },
        pt: 5,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", lg: "flex-start" },
          textAlign: { xs: "center", lg: "left" },
          pt: { xs: 0, lg: 10 },
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", sm: "2rem" },
            }}
          >
            {"I'm" + " "}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              color: theme.palette.primary.main,
              fontSize: { xs: "2rem", sm: "2rem" },
            }}
          >
            {"Jordan Martinez!"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              color: theme.palette.text.primary,
              fontSize: { xs: "1.25rem", sm: "2rem" },
            }}
          >
            {"Full Time"}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              color: theme.palette.primary.main,
              fontSize: { xs: "1.25rem", sm: "2rem" },
            }}
          >
            {"Full Stack Developer"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "300px", md: "650px", lg: "500px" },
          height: { xs: "300px", md: "650px", lg: "500px" },
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
