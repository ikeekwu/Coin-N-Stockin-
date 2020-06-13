// import React from "react";
// import { ThemeProvider, useTheme } from "@material-ui/core/styles";
// export default function useTheme(){
//     return
// }


import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: green[500],
    },
    secondary: {
        main: red[500],
    },
  },
});

export default theme;