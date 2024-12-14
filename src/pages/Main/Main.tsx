import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offers.ts';
import CityTabs from '../../components/CityTabs/CityTabs.tsx';
import EmptyOffersContainer from '../../components/EmptyOffersContainer/EmptyOffersContainer.tsx';
import OffersContainer from '../../components/OffersContainer/OffersContainer.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getAllOffers, getOffersByCity } from '../../store/action.ts';

type TMainProps = {
  setActiveOffer: (offer: TOffer | undefined) => void;
  activeOffer?: TOffer;
};

function Main({ activeOffer, setActiveOffer }: TMainProps) {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);

  const offersByCity = offers.filter((offer) => offer.city.name === city);

  useEffect(() => {
    dispatch(getAllOffers());
    dispatch(getOffersByCity());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная</title>
      </Helmet>
      <main
        className={classNames('page__main', 'page__main--index', {
          'page__main--index-empty': !offersByCity.length,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          {offersByCity.length ? (
            <OffersContainer
              offers={offersByCity}
              activeOffer={activeOffer}
              setActiveOffer={setActiveOffer}
            />
          ) : (
            <EmptyOffersContainer />
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
