import { Button, SxProps, Theme, useTheme } from "@mui/material";

interface JGMButtonProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function JGMButton({ children, sx }: JGMButtonProps) {
  const theme = useTheme();

  return (
    <Button
      sx={{
        color: "#F0F0F0",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 3,
        width: "170px",
        height: "40px",
        mt: 2,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
