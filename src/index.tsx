import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { offerById, offers } from './mocks/offers.ts';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} offerById={offerById} />
    </Provider>
  </React.StrictMode>,
);
