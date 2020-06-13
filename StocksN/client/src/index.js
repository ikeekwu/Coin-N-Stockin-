// React
import React from "react";
import ReactDOM from "react-dom";
import "./utils/CSS/App.css";
import App from "./App";
import registerServiceWorker from "./utils/JS/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
