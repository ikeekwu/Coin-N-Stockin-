import React from "react";
import Footer from './Components/Layouts/Footer';
import SignIn from './Components/SignInPage/SignIn';
import SignUp from './Components/SignUpPage/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          </Switch>
        </div>
      </Router>
      
      
    </React.Fragment>
  </ThemeProvider>
    
  
  )
  
}

export default App;
