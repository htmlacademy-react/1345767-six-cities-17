import { createAction } from '@reduxjs/toolkit';
import { TCityTypes } from '../types/offers.ts';

export const changeCity = createAction<TCityTypes>('offer/changeCity');

export const getAllOffers = createAction('offer/getAllOffers');

export const getOffersByCity = createAction('offer/getOffersByCity');
