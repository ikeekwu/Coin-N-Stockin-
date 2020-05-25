import React, { Fragment } from "react";
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";


function App (){
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });


  return (
  
  <ThemeProvider theme = {darkTheme}>

    <Fragment>
      <Header/>

      <Footer/>
    </Fragment>
  </ThemeProvider>
    
  
  )
  
}

export default App;
