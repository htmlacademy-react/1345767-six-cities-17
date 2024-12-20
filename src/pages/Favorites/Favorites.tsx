import { Helmet } from 'react-helmet-async';
import { groupOffersByCity } from '../../utils/groupOffersByCity.ts';
import { Link } from 'react-router-dom';
import { getRatingStyles } from '../../utils/getRatingStyles.ts';
import FavoritesFooter from '../../components/FavoritesFooter/FavoritesFooter.tsx';
import { useAppSelector } from '../../hooks';
import { CityTypes } from '../../const.ts';

function Favorites() {
  const offers = useAppSelector((state) => state.offers);

  const favoriteOffers = offers.filter(({ isFavorite }) => isFavorite);
  const offersByCity = groupOffersByCity(favoriteOffers);

  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      {favoriteOffers.length ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.keys(offersByCity).map((city) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offersByCity[city as CityTypes].map(
                        ({
                          id,
                          isPremium,
                          previewImage,
                          price,
                          title,
                          rating,
                          type,
                        }) => (
                          <article
                            key={id}
                            className="favorites__card place-card"
                          >
                            {isPremium && (
                              <div className="place-card__mark">
                                <span>Premium</span>
                              </div>
                            )}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`/offer/${id}`}>
                                <img
                                  className="place-card__image"
                                  src={previewImage}
                                  width="150"
                                  height="110"
                                  alt="Place image"
                                />
                              </Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">
                                    &euro;{price}
                                  </b>
                                  <span className="place-card__price-text">
                                    &#47;&nbsp;night
                                  </span>
                                </div>
                                <button
                                  className="place-card__bookmark-button place-card__bookmark-button--active button"
                                  type="button"
                                >
                                  <svg
                                    className="place-card__bookmark-icon"
                                    width="18"
                                    height="19"
                                  >
                                    <use xlinkHref="#icon-bookmark"></use>
                                  </svg>
                                  <span className="visually-hidden">
                                    In bookmarks
                                  </span>
                                </button>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={getRatingStyles(rating)}></span>
                                  <span className="visually-hidden">
                                    Rating
                                  </span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">{title}</a>
                              </h2>
                              <p className="place-card__type">
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                              </p>
                            </div>
                          </article>
                        ),
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <div className="page page--favorites-empty">
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">FavoritesEmpty (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">
                    Save properties to narrow down search or plan your future
                    trips.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      )}
      <FavoritesFooter />
    </div>
  );
}

export default Favorites;
