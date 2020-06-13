//Main app with the landing page 
import React, { useRef , useEffect} from "react";

import Footer from './Components/Footer/index';
import SignIn from './Components/SignInPage/index';
import SignUp from './Components/SignUpPage/index';
import Favorites from './Components/Favorites/index'
import Crypto from './Components/Crypto/index';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {green, red,} from "@material-ui/core/colors";
import "./utils/CSS/App.css";
// Pages
import UserDashboard from './pages/UserDashboard.js';
import Stocks from './pages/Stocks.js';


function App (){
  const theme = createMuiTheme({
    palette: {
      primary: {
        main:green[800],
      },
      secondary: {
        main: red[900],
      },
      
    },
  });

  // const instance = useRef(null)

  // useEffect(() => {
  //   const scriptTag = document.createElement("script");
  //   scriptTag.src = "http://localhost:3000/userdashboard/"
  //   instance.current.appendChild(scriptTag)
  // })

  return (

    <ThemeProvider theme = {theme}>
      {/* <div ref={instance} /> */}
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path = {"/"}>
              <SignIn components = {SignIn} />
              <Footer/>
            </Route>
            
            <Route exact path = {"/signup"}>
              <SignUp components = {SignUp} />
              
            </Route>

            <Route exact path = {"/userdashboard"}>
              <UserDashboard />
              
            </Route>

            <Route exact path = {"/userdashboard/crypto"}>
              <Crypto components = {Crypto} />
              
            </Route>

            <Route exact path = {"/userdashboard/stocks"}>
              <Stocks />
              
            </Route>
            <Route exact path = {"/userdashboard/favorites"}>
              <Favorites components = {Favorites} />
              
            </Route>
          </Switch>
        </div>
      </Router>
      
      
    </React.Fragment>
  </ThemeProvider>
  
  );
}

export default App;
