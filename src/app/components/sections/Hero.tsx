"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import HeroPhoto from "../../../../public/hero_photo.jpg";

export default function Hero() {
  const theme = useTheme();

  const heroTextTypographyStylesWhite = {
    whiteSpace: "nowrap",
    color: theme.palette.text.primary,
    fontSize: "inherit",
  };

  const heroTextTypographyStylesOrange = {
    flexGrow: 1,
    whiteSpace: "nowrap",
    color: theme.palette.primary.main,
    fontSize: "inherit",
  };

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
          alignItems: "flex-start",
          textAlign: "left",
          pt: { xs: 0, lg: 10 },
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", pb: 2, gap: 1 }}>
          <Typography
            component="div"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", sm: "2.2rem" },
            }}
          >
            {"I'm"}
          </Typography>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              color: theme.palette.primary.main,
              fontSize: { xs: "2rem", sm: "2.2rem" },
            }}
          >
            {"Jordan Martinez!"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            gap: 0.5,
          }}
        >
          <Typography component="div" sx={heroTextTypographyStylesWhite}>
            {"Full Stack"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesOrange}>
            {"Developer"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesWhite}>
            {"|"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesWhite}>
            {"Former"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesOrange}>
            {"Physics Teacher 👨‍💻"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          <Typography component="div" sx={heroTextTypographyStylesWhite}>
            {"Turning"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesOrange}>
            {"Science"}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={heroTextTypographyStylesWhite}
          >
            {"into"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesOrange}>
            {"Software ⚡"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          <Typography component="div" sx={heroTextTypographyStylesWhite}>
            {"Powered by"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesOrange}>
            {"Code"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesWhite}>
            {"and"}
          </Typography>
          <Typography component="div" sx={heroTextTypographyStylesOrange}>
            {"Great Food 🍔"}
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
