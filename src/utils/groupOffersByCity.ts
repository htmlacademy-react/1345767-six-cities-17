import { TCityOffers, TOffer } from '../types/offers.ts';

export const groupOffersByCity = (offers: TOffer[]) =>
  offers.reduce((acc, offer) => {
    const { name: key } = offer.city;

    // (acc[key] = acc[key] || []).push(offer);

    if (!acc[key]) {
      acc[key] = [offer];
    } else {
      acc[key].push(offer);
    }

    return acc;
  }, {} as TCityOffers);
