import OffersList from '../OffersList/OffersList.tsx';
import Map from '../Map/Map.tsx';
import { useAppSelector } from '../../hooks';
import OffersSorting from '../OffersSorting/OffersSorting.tsx';
import { useState } from 'react';
import { TOffer } from '../../types/offers.ts';

function CityWithOffers() {
  const [activeOffer, setActiveOffer] = useState<TOffer | undefined>();

  const city = useAppSelector((state) => state.city);
  const offersByCity = useAppSelector((state) => state.offersByCity);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersByCity.length} places to stay in {city}
        </b>
        <OffersSorting />
        <div className="cities__places-list places__list tabs__content">
          <OffersList offers={offersByCity} setActiveOffer={setActiveOffer} />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offersByCity} activeOffer={activeOffer} />
        </section>
      </div>
    </div>
  );
}

export default CityWithOffers;
