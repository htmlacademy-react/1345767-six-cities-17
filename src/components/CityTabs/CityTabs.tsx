import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, Cities } from '../../const.ts';
import classNames from 'classnames';
import { changeCity } from '../../store/action.ts';
import { TCityTypes } from '../../types/offers.ts';
import { Link } from 'react-router-dom';

function CityTabs() {
  const dispatch = useAppDispatch();

  const activeCity = useAppSelector((state) => state.city);
  const handleClickTab = (cityName: TCityTypes) =>
    dispatch(changeCity(cityName));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => (
            <li key={city} className="locations__item">
              <Link
                to={AppRoute.Root}
                onClick={() => handleClickTab(city)}
                className={classNames('locations__item-link', 'tabs__item', {
                  'tabs__item--active': activeCity === city,
                })}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
