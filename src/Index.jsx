import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Index.css';
import { Provider } from './context/books.jsx';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
