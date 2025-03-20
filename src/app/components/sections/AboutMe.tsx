import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "../ui/Carousel";
import { getSectionTypographyStylesLightDark } from "@/app/styles/typographyStyles";

export default function AboutMe() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { lg: 15 },
        pt: 10,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Carousel />
      <Box sx={{ display: "flex", flexDirection: "column", pt: 4 }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            color: theme.palette.primary.main,
            fontSize: { xs: "2rem", sm: "2.2rem" },
            fontWeight: 800,
            pb: 2,
          }}
        >
          About Me
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
            gap: 2,
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Full Stack Developer with a background in Education!"}
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Languages: English & Spanish"}
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Favourite Food: Birria Tacos 🌮"}
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"City: Pickering, Ontario"}
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Favourite Video Game: Call of Duty 🎮"}
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Favourite Sport: Any racket sport 🎾"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
