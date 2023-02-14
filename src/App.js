import "./styles.css";
import BasicTable from "./components/Table";

//a's code
import Header from "./components/Header";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
//resets css, allows us to pass themes into MUI
//

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    // this sets up color context, site-wide access
    <ColorModeContext.Provider value={colorMode}>
      {/* MUI has access to theme as well*/}
      <ThemeProvider theme={theme}>
        {/* resets CSS to defaults, provided by MUI */}
        <CssBaseline />
        <div className="App">
          <Header />
          <BasicTable />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
