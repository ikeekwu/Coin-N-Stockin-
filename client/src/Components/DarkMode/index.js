import React, {useState} from "react";
import Switch from '@material-ui/core/Switch';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function darkThemeButton () {
    const [darkMode, setDarkMode] = useState(false);

    const darkTheme = createMuiTheme ({
        palette: {
          type:"dark",
        },
    });

    const lightTheme =  createMuiTheme({});

    return (
        <ThemeProvider theme = {darkMode ? darkTheme : lightTheme}>
            <Switch checked ={darkMode} onChange = {() => setDarkMode(!darkMode)} />
        </ThemeProvider>
    );
    
}
export default darkThemeButton;