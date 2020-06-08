import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import BitCoin from "./pages/BitCoin";
import NoMatch from "./pages/NoMatch";

import Sidebar from "./components/SideBar";





function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/stocks"]}>
              <Stocks />
            </Route>
            <Route exact path={"/bitcoin"}>
              <BitCoin />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  
  );
}

export default App;
