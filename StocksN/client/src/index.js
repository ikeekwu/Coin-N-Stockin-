// React
import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import App from "./App";
import registerServiceWorker from "./JS/registerServiceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
