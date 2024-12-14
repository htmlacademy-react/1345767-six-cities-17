import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getAllOffers, getOffersByCity } from './action.ts';
import { TCityTypes, TOffer } from '../types/offers.ts';
import { offers } from '../mocks/offers.ts';

const initialState = {
  city: 'Paris' as TCityTypes,
  offers: [] as TOffer[],
  offersByCity: [] as TOffer[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(getAllOffers, (state) => {
      state.offers = offers;
    })
    .addCase(getOffersByCity, (state) => {
      state.offersByCity = state.offers.filter(
        (offer) => offer.city.name === state.city,
      );
    });
});

export { reducer };
