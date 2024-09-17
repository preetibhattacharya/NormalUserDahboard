import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Correct path to App component
import './styles/globals.css'; // Ensure global styles are applied

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
