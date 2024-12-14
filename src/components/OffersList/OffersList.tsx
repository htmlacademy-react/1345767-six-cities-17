import { TOffer } from '../../types/offers.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';
import { Link } from 'react-router-dom';

type TOffersListProps = {
  offers: TOffer[];
  containerStyles: string;
  itemStyles: string;
  setActiveOffer?: (offer: TOffer | undefined) => void;
};

function OffersList({
  offers,
  setActiveOffer,
  containerStyles,
  itemStyles,
}: TOffersListProps) {
  return (
    <div className={containerStyles}>
      {offers.map((offer) => (
        <Link
          to={`/offer/${offer.id}`}
          key={offer.id}
          onMouseEnter={() => (setActiveOffer ? setActiveOffer(offer) : null)}
          onMouseLeave={() =>
            setActiveOffer ? setActiveOffer(undefined) : null
          }
        >
          <OfferCard className={itemStyles} offer={offer} />
        </Link>
      ))}
    </div>
  );
}

export default OffersList;
