import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import CityTabs from '../../components/CityTabs/CityTabs.tsx';
import CityWithoutOffers from '../../components/CityWithoutOffers/CityWithoutOffers.tsx';
import CityWithOffers from '../../components/CityWithOffers/CityWithOffers.tsx';
import { useAppSelector } from '../../hooks';

function Main() {
  const offersByCity = useAppSelector((state) => state.offersByCity);

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
        <CityTabs />
        <div className="cities">
          {offersByCity.length ? <CityWithOffers /> : <CityWithoutOffers />}
        </div>
      </main>
    </div>
  );
}

export default Main;
