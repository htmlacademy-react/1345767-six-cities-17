import { TOffer } from '../../types/offers.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';
import { Link } from 'react-router-dom';

type TOffersListProps = {
  offers: TOffer[];
};

function OffersList({ offers }: TOffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Link to={`/offer/${offer.id}`} key={offer.id}>
          <OfferCard offer={offer} />
        </Link>
      ))}
    </div>
  );
}

export default OffersList;
