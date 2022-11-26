import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain=dev-rk7d7dkzlmnpms28.us.auth0.com
    clientId=VbFXkSMcG3PFGeaQFNeNn59wGRhGpm2x
    redirectUri=https://movicritics.vercel.app/callback>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
