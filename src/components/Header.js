import "../styles.css";

//
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
//



export default function Header() {

    //useTheme from MUI grabs theme, similar to context, allows access to theme
    const theme = useTheme();

    //any time we want to use colormode, we grab it from useTheme, pass it into tokens
    //primary[400] will be different from light and dark depending on mode
    //I don't think we're using any colors here
    const colors = tokens(theme.palette.mode);

    //used to toggle different states for color mode
    const colorMode = useContext(ColorModeContext);

    return (
        <Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
            </Box>
            <Box color={theme.palette.page.text}>
                <h2>PILYTIX Scored Opportunities</h2>
            </Box>
        </Box>
    );
}
