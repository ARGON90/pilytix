import "./styles.css";
import BasicTable from "./components/Table";

//a's code
import Header from "./components/Header";

import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";
//resets css, allows us to pass themes into MUI
//

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    // this sets up color context, site-wide access
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
