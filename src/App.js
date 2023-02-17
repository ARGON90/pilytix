import "./styles.css";
import BasicTable from "./components/Table";
import Header from "./components/Header";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";


export default function App() {
  //providing theme to entire app
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: theme.palette.page.background}} className="App">
          <Header />
          <BasicTable />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
