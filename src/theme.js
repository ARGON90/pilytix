import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//basic MUI theme settings: light and dark palettes
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          //DARK
          page: {
            background: '#0e0e10',
            text: '#fcfcfc'
          },
          table: {
            background: '#121315',
            text: '#fcfcfc'
          },
          popup: {
            background: '#1e1f21',
            text: '#fcfcfc'
          },
          axisTheme: {
            fontSize: '14px',
            textColor: 'white',
          },
          tableRowHover: {
            backgroundColor: '#5d5f61'
          }

        }
        : {
          //LIGHT
          page: {
            background: '#f9f9f9',
            text: '#0a183e'
          },
          table: {
            background: '#f4f4f4',
            text: '#0a183e'
          },
          popup: {
            background: '#f4f4f4',
            text: '#0a183e'
          },
          button: {
            strongN: 'red'
          },
          axisTheme: {
            fontSize: '14px',
            textColor: 'black',
          },
          tableRowHover: {
            backgroundColor: '#dedede'
          }
        }),
    },
  };
};

//create context for app-wide usage
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

//toggling light/dark /w button at top of screen
export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
