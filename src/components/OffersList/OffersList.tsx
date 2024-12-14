import { TOffer } from '../../types/offers.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';

type TOffersListProps = {
  offers: TOffer[];
  itemStyles: string;
  setActiveOffer?: (offer: TOffer | undefined) => void;
};

function OffersList({ offers, setActiveOffer, itemStyles }: TOffersListProps) {
  const handleMouseEnter = (offer: TOffer) =>
    setActiveOffer ? setActiveOffer(offer) : null;

  const handleMouseLeave = () =>
    setActiveOffer ? setActiveOffer(undefined) : null;

  return (
    <>
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => handleMouseEnter(offer)}
          onMouseLeave={handleMouseLeave}
        >
          <OfferCard className={itemStyles} offer={offer} />
        </div>
      ))}
    </>
  );
}

export default OffersList;
