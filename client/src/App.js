//Main app with the landing page 

import React, { useRef , useEffect} from "react";
import SignIn from './Components/SignInPage/index';
import SignUp from './Components/SignUpPage/index';
import UserDashboard from './Components/UserDashboard/index';
import Favorites from './Components/Favorites/index'
import Crypto from './Components/Crypto';
import Stocks from './Components/Stocks';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {green, red,} from "@material-ui/core/colors";
import "./App.css";
import "./utils/CSS/App.css";


// import UserDashboard from './pages/UserDashboard.js';
// import Stocks from './pages/Stocks.js';

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







  
  return (
  
  <ThemeProvider theme = {theme}>


    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path = {"/"}>
              <SignIn components = {SignIn} />
              
            </Route>
            
            <Route exact path = {"/signup"}>
              <SignUp components = {SignUp} />
              
            </Route>

            <Route exact path = {"/userdashboard"}>
              <UserDashboard components = {UserDashboard} />
             

            </Route>

            <Route exact path = {"/userdashboard/crypto"}>
              <Crypto components = {Crypto} />
              
            </Route>

            <Route exact path = {"/userdashboard/stocks"}>
              <Stocks components = {Stocks} />

              
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
