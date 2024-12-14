import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../Layout/Layout.tsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import { Main, Login, Favorites, Offer, PageNotFound } from '../../pages';
import { AppRoute, AuthStatus } from '../../const.ts';
import { TOffer, TOfferById } from '../../types/offers.ts';
import { useState } from 'react';

type TAppProps = {
  placesCount: number;
  offers: TOffer[];
  offerById: TOfferById;
};

function App({ placesCount, offers, offerById }: TAppProps) {
  const [activeOffer, setActiveOffer] = useState<TOffer | undefined>();

  const authStatus = AuthStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route
              index
              element={
                <Main
                  activeOffer={activeOffer}
                  setActiveOffer={setActiveOffer}
                  placesCount={placesCount}
                  offers={offers}
                />
              }
            />
            <Route
              path={AppRoute.Login}
              element={<Login authStatus={authStatus} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authStatus={authStatus}>
                  <Favorites offers={offers} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offerById={offerById} />}
            />
          </Route>
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
