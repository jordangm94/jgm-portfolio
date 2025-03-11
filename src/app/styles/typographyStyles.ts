import { Theme } from "@mui/material";

export const getSectionTypographyStylesLightDark = (theme: Theme) => ({
  color: theme.palette.text.primary,
  fontSize: "inherit",
});

export const getSectionTypographyStylesOrange = (theme: Theme) => ({
  flexGrow: 1,
  color: theme.palette.primary.main,
  fontSize: "inherit",
});
