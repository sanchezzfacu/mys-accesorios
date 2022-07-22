import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux';
import {store} from './redux/store'
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-c3kfun7v.us.auth0.com' clientId='EBA72dTZebPFIfWNpPrLHjNrLuVuF6za' redirectUri={window.location.origin}>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
