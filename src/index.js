import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';
import App from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);

