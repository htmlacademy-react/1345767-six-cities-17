import { TOffer } from '../../types/TOffer.ts';
import { AppRoute } from '../../consts/const.ts';
import { Link } from 'react-router-dom';
import OfferCardList from '../../components/OfferCardList/OfferCardList.tsx';
import Map from '../../components/Map/Map.tsx';
import { useState } from 'react';

type MainPageProps = {
  offersCount: number;
  offers: TOffer[];
};

function MainPage({ offersCount, offers }: MainPageProps) {
  const [activeOffer, setActiveOffer] = useState<TOffer>(offers[0]);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link
                  className="locations__item-link tabs__item"
                  to={AppRoute.Root}
                >
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link
                  className="locations__item-link tabs__item"
                  to={AppRoute.Root}
                >
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link
                  className="locations__item-link tabs__item"
                  to={AppRoute.Root}
                >
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link
                  className="locations__item-link tabs__item tabs__item--active"
                  to={AppRoute.Root}
                >
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link
                  className="locations__item-link tabs__item"
                  to={AppRoute.Root}
                >
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link
                  className="locations__item-link tabs__item"
                  to={AppRoute.Root}
                >
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferCardList
                offers={offers}
                setActiveOffer={setActiveOffer}
                isNearbyOffers={false}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map activeOffer={activeOffer} offers={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
