// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "./utils/themes/theme.js";

import useMediaQuery from '@material-ui/core/useMediaQuery';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <App />
    </ThemeProvider>
, document.getElementById("root"));
