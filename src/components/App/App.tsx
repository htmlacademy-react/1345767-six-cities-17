import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../Layout/Layout.tsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import { Main, Login, Favorites, Offer, PageNotFound } from '../../pages';
import { AppRoute, AuthStatus } from '../../const.ts';
import { TOffer, TOfferById } from '../../types/offers.ts';

type TAppProps = {
  placesCount: number;
  offers: TOffer[];
  offerById: TOfferById;
};

function App({ placesCount, offers, offerById }: TAppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route
              index
              element={<Main placesCount={placesCount} offers={offers} />}
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authStatus={AuthStatus.Auth}>
                  <Favorites offers={offers} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offers={offers} data={offerById} />}
            />
          </Route>
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
