import React, { Fragment } from "react";
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import SignIn from './Components/SignInPage/SignIn'
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
        <SignIn/>
      <Footer/>
    </Fragment>
  </ThemeProvider>
    
  
  )
  
}

export default App;
