import "./styles.css";
import BasicTable from "./Table";

//a's code
import Header from "./Header";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
//

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* //MUI has access to it as well */}
      <ThemeProvider theme={theme}>
        {/* resets CSS to baselines, provided by MUI */}
        <CssBaseline />
        <div className="App">
          <Header />
          <BasicTable />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
