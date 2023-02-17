import "../styles.css";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function Header() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "light" ? (
                        <LightModeOutlinedIcon />
                        ) : (
                        <DarkModeOutlinedIcon  />
                    )}
                </IconButton>
            </Box>
            <Box backgroundColor={theme.palette.page.background} color={theme.palette.page.text}>
                <h2 className="table-title">PILYTIX Scored Opportunities</h2>
            </Box>
        </Box>
    );
}
