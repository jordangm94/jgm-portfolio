import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "../ui/Carousel";
import {
  getSectionTypographyStylesLightDark,
  getSectionTypographyStylesOrange,
} from "@/app/styles/typographyStyles";

export default function AboutMe() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { lg: 8 },
        pt: 10,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Carousel />
      <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
        <Typography
          sx={{
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
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            gap: 1,
            pb: 3,
          }}
        >
          <Typography
            sx={getSectionTypographyStylesOrange(theme)}
            component="div"
          >
            {"Full Stack"}
          </Typography>
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Developer with a background in"}
          </Typography>
          <Typography
            sx={getSectionTypographyStylesOrange(theme)}
            component="div"
          >
            {"Education!"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            gap: 1,
            pb: 3,
          }}
        >
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Languages: English & Spanish"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            gap: 1,
            pb: 3,
          }}
        >
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Favourite Food: Birria Tacos 🌮"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            gap: 1,
            pb: 3,
          }}
        >
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"City: Pickering, Ontario"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            gap: 1,
            pb: 3,
          }}
        >
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Favourite Video Game: Call of Duty 🎮"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            gap: 1,
            pb: 3,
          }}
        >
          <Typography
            sx={getSectionTypographyStylesLightDark(theme)}
            component="div"
          >
            {"Favourite Sport: Any racquet sport 🎾"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
