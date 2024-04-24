import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppUseEffect from './app-use-effect';
import AppUseMemo from './app-use-memo';
import { AppRouter } from './app-router-navigation';
import AppContext from './app-use-context';
import AppUseCustomFiles from './app-use-custom-files';
import { AppStoreRedux } from './app-store-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <AppStoreRedux />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
