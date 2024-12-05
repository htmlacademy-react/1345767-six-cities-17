import { TOffer } from '../../types/TOffer.ts';
import { Link } from 'react-router-dom';

type OfferCardProps = {
  offer: TOffer;
  setCurrentCard: (offer: TOffer) => void;
};

function OfferCard({ offer, setCurrentCard }: OfferCardProps) {
  const { isFavorite, isPremium, type, title, previewImage, price, rating } =
    offer;
  const MAX_STARS_FOR_RATING = 5;
  const ratingStyle = { width: `${(100 / MAX_STARS_FOR_RATING) * rating}%` };
  const favoriteClass = isFavorite && ' place-card__bookmark-button--active';

  const handleCardOver = () => {
    setCurrentCard(offer);
  };

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className="cities__image-wrapper place-card__image-wrapper"
        onMouseOver={handleCardOver}
      >
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${favoriteClass} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
