import { TOffer } from '../../types/offers.ts';
import { getRatingStyles } from '../../utils/getRatingStyles.ts';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type TOfferCardProps = {
  offer: TOffer;
  isNearby?: boolean;
};

function OfferCard({ offer, isNearby }: TOfferCardProps) {
  const { isPremium, previewImage, price, rating, type, title, isFavorite } =
    offer;

  return (
    <article
      className={classNames(
        { 'cities--card': !isNearby },
        { 'near-places__card': isNearby },
        'place-card',
      )}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
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
            className={classNames(
              'place-card__bookmark-button',
              { 'place-card__bookmark-button--active': isFavorite },
              'button',
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            {isFavorite && (
              <span className="visually-hidden">In bookmarks</span>
            )}
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStyles(rating)}></span>
            <span className="visually-hidden">Rating</span>
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
  );
}

export default OfferCard;
