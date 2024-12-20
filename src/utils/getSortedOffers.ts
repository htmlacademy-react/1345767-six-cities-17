import { TState } from '../types/state.ts';
import { SortTypes } from '../const.ts';

export const getSortedOffers = (state: TState) => {
  const { offers, offersByCity, sortType, city } = state;
  const defaultSorted = offers.filter((offer) => offer.city.name === city);

  return {
    [SortTypes.Popular]: defaultSorted,
    [SortTypes.PriceLow]: [...offersByCity].sort((a, b) => a.price - b.price),
    [SortTypes.PriceHigh]: [...offersByCity].sort((a, b) => b.price - a.price),
    [SortTypes.TopRated]: [...offersByCity].sort((a, b) => b.rating - a.rating),
  }[sortType];
};
