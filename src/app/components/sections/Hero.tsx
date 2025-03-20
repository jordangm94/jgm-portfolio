"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import HeroPhoto from "../../../../public/hero_photo.jpg";
import JGMButton from "../ui/Button";
import {
  getSectionTypographyStylesLightDark,
  getSectionTypographyStylesOrange,
} from "@/app/styles/typographyStyles";

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
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
            gap: 1,
            px: { xs: 1.5, sm: 0 },
          }}
        >
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            Full Stack{" "}
            <Typography
              sx={getSectionTypographyStylesOrange(theme)}
              component="span"
            >
              Developer{" "}
            </Typography>
            | Former{" "}
            <Typography
              sx={getSectionTypographyStylesOrange(theme)}
              component="span"
            >
              Physics Teacher 👨‍💻
            </Typography>
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            Turning{" "}
            <Typography sx={getSectionTypographyStylesOrange} component="span">
              Science{" "}
            </Typography>
            into{" "}
            <Typography sx={getSectionTypographyStylesOrange} component="span">
              Software ⚡
            </Typography>
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            Powered by{" "}
            <Typography sx={getSectionTypographyStylesOrange} component="span">
              Code{" "}
            </Typography>
            and{" "}
            <Typography sx={getSectionTypographyStylesOrange} component="span">
              Great Food 🍔
            </Typography>
          </Typography>
        </Box>
        <a href="/JordanMartinez-Resume.pdf" download>
          <JGMButton>Download Resume</JGMButton>
        </a>
      </Box>
      <Box
        sx={{
          width: { xs: "350px", md: "650px", lg: "500px" },
          height: { xs: "350px", md: "650px", lg: "500px" },
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
