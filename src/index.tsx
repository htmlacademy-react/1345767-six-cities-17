import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { offerById, offers } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  placesCount: 312,
};

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      offerById={offerById}
      placesCount={Settings.placesCount}
    />
  </React.StrictMode>,
);
