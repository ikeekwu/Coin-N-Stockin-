import React from "react";
import Footer from './Components/Footer/index';
import SignIn from './Components/SignInPage/index';
import SignUp from './Components/SignUpPage/index';
import UserDashboard from './Components/UserDashboard/index'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {green, red, deepPurple} from "@material-ui/core/colors";
import "./App.css";


function App (){
  const theme = createMuiTheme({
    palette: {
      primary: {
        main:green[800],
      },
      secondary: {
        main: red[900],
      },
      tertiary: {
        main: deepPurple,
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
              <Footer/>
            </Route>
            <Route exact path = {"/signup"}>
              <SignUp components = {SignUp} />
              <Footer/>
            </Route>

            <Route exact path = {"/userdashboard"}>
              <UserDashboard components = {UserDashboard} />
              <Footer/>
            </Route>
          </Switch>
        </div>
      </Router>
      
      
    </React.Fragment>
  </ThemeProvider>
    
  
  )
  
}

export default App;
