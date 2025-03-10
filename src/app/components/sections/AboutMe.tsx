import { Box, useTheme } from "@mui/material";
import Carousel from "../ui/Carousel";

export default function AboutMe() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        pt: 10,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Carousel />
    </Box>
  );
}
