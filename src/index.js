import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Define App class (main page to hold other components)

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
