import "./styles.css";
import BasicTable from "./Table";

//a's code
import Header from "./Header";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Popup from "./Popup";
//

export default function App() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* //MUI has access to it as well */}
      <ThemeProvider theme={theme}>
        {/* resets CSS to baselines, provided by MUI */}
        <CssBaseline />
        <div className="App">
          {/* <button onClick={() => setButtonPopup(true)}></button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>My Popup</h2>
          </Popup> */}
          <Header />
          <BasicTable />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
