import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'views/Root';
import 'assets/styles/fonts.css';
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
