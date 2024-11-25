import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  placesCount: 312,
};

root.render(
  <React.StrictMode>
    <App placesCount={Settings.placesCount} />
  </React.StrictMode>,
);
