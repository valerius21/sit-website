import React from "react";
//import ReactDOM from "react-dom";
import { render } from 'react-snapshot';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import './App.css';
import "./assets/scss/style.scss";

const history = createBrowserHistory();

//ReactDOM.render(
render( // using react-snapshot
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
