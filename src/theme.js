import { createTheme } from "@mui/material";

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#358fe8",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
