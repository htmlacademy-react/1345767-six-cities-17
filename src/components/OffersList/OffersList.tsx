import { TOffer } from '../../types/offers.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';
import { Link } from 'react-router-dom';

type TOffersListProps = {
  offers: TOffer[];
  setActiveOffer: (offer: TOffer) => void;
};

function OffersList({ offers, setActiveOffer }: TOffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Link
          to={`/offer/${offer.id}`}
          key={offer.id}
          onMouseEnter={() => setActiveOffer(offer)}
        >
          <OfferCard offer={offer} />
        </Link>
      ))}
    </div>
  );
}

export default OffersList;
