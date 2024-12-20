import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortType,
  getAllOffers,
  getOffersByCity,
  sortOffers,
} from './action.ts';
import { TOffer } from '../types/offers.ts';
import { mockOffers } from '../mocks/mockOffers.ts';
import { CityTypes, SortTypes } from '../const.ts';
import { getSortedOffers } from '../utils/getSortedOffers.ts';

const initialState = {
  city: CityTypes.Paris,
  sortType: SortTypes.Popular,
  offers: [] as TOffer[],
  offersByCity: [] as TOffer[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(getAllOffers, (state) => {
      state.offers = mockOffers;
    })
    .addCase(getOffersByCity, (state, { payload }) => {
      state.offersByCity = state.offers.filter(
        (offer) => offer.city.name === payload,
      );
    })
    .addCase(changeSortType, (state, { payload }) => {
      state.sortType = payload;
    })
    .addCase(sortOffers, (state) => {
      state.offersByCity = getSortedOffers(state);
    });
});

export { reducer };
