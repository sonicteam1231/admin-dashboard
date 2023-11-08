// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import App from './App';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
