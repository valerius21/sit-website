import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
