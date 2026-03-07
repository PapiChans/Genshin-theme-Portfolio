import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Internetloader from './components/loaders/internetloader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Internetloader />
  </React.StrictMode>
);
