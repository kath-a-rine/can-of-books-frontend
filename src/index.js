// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={process.env.REACT_APP_REDIRECT_URI}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);