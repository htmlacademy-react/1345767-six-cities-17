import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../Layout/Layout.tsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import { Main, Login, Favorites, Offer, PageNotFound } from '../../pages';
import { AppRoute, AuthStatus } from '../../const.ts';
import { TOfferById } from '../../types/offers.ts';
import { useEffect } from 'react';
import { getAllOffers } from '../../store/action.ts';
import { useAppDispatch } from '../../hooks';

type TAppProps = {
  offerById: TOfferById;
};

function App({ offerById }: TAppProps) {
  const dispatch = useAppDispatch();

  const authStatus = AuthStatus.Auth;

  useEffect(() => {
    dispatch(getAllOffers());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Main />} />
            <Route
              path={AppRoute.Login}
              element={<Login authStatus={authStatus} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authStatus={authStatus}>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offerById={offerById} />}
            />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
