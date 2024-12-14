import { Helmet } from 'react-helmet-async';
import { TOfferById } from '../../types/offers.ts';
import OfferById from '../../components/OfferById/OfferById.tsx';
import OffersList from '../../components/OffersList/OffersList.tsx';
import { offersNearby } from '../../mocks/offers.ts';

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
            <OffersList
              containerStyles="near-places__list places__list"
              itemStyles="near-places__card place-card"
              offers={offersNearby}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
