import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KakaoMapScriptLoader from './components/KakaoMapScriptLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <KakaoMapScriptLoader />
    <App />
  </React.StrictMode>
);

