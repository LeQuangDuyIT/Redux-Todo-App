import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReactReduxProvider } from 'react-redux';
import App from './App.jsx';
import store from './redux/store.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactReduxProvider store={store}>
      <App />
    </ReactReduxProvider>
  </React.StrictMode>
);
