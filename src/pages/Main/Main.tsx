import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offers.ts';
import CityTabs from '../../components/CityTabs/CityTabs.tsx';
import EmptyOffersContainer from '../../components/EmptyOffersContainer/EmptyOffersContainer.tsx';
import OffersContainer from '../../components/OffersContainer/OffersContainer.tsx';

type TMainProps = {
  placesCount: number;
  offers: TOffer[];
};

function Main({ placesCount, offers }: TMainProps) {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная</title>
      </Helmet>
      <main
        className={classNames('page__main', 'page__main--index', {
          'page__main--index-empty': !offers.length,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          {offers.length ? (
            <OffersContainer offers={offers} placesCount={placesCount} />
          ) : (
            <EmptyOffersContainer />
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
