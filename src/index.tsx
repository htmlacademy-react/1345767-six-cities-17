import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { offerById, offers } from './mocks/offers.ts';
import { Settings } from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      offerById={offerById}
      placesCount={Settings.placesCount}
    />
  </React.StrictMode>,
);
