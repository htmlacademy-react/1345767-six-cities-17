import { createAction } from '@reduxjs/toolkit';
import { CityTypes, SortTypes } from '../const.ts';

export const changeCity = createAction<CityTypes>('offer/changeCity');

export const getAllOffers = createAction('offer/getAllOffers');

export const getOffersByCity = createAction<CityTypes>('offer/getOffersByCity');

export const changeSortType = createAction<SortTypes>('offer/changeSortType');

export const sortOffers = createAction('offer/sortOffers');
