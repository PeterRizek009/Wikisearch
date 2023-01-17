import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);


reportWebVitals();
