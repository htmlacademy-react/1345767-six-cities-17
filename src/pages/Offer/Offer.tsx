import { Helmet } from 'react-helmet-async';
import { TOfferById } from '../../types/offers.ts';
import OfferById from '../../components/OfferById/OfferById.tsx';
import OffersList from '../../components/OffersList/OffersList.tsx';
import { offersNearby } from '../../mocks/mockOffers.ts';

type TOfferProps = {
  offerById: TOfferById;
};

function Offer({ offerById }: TOfferProps) {
  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Предложение</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <div className="container">
          <OfferById offerById={offerById} />
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OffersList offers={offersNearby} isNearby />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
