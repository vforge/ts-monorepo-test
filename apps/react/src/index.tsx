import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { trackEvent } from "@vforge/tracking";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

trackEvent({
  action: 'Loaded',
});

ReactDOM.render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
