import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offers.ts';
import OffersList from '../../components/OffersList/OffersList.tsx';
import CityTabs from '../../components/CityTabs/CityTabs.tsx';

type TMainProps = {
  placesCount: number;
  offers: TOffer[];
};

function Main({ placesCount, offers }: TMainProps) {
  const pageMainStyles = `page__main page__main--index${!offers.length && ' page__main--index-empty'}`;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная</title>
      </Helmet>
      <main className={pageMainStyles}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          {offers.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {placesCount} places to stay in Amsterdam
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">
                    Sort by &nbsp;
                  </span>
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
                <OffersList offers={offers} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
