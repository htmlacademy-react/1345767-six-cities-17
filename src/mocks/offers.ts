import { TOffer, TOfferById } from '../types/offers.ts';
import { generateUUID } from '../utils/generateUUID.ts';

export const offers: TOffer[] = [
  {
    id: generateUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.15545,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: generateUUID(),
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
  },
  {
    id: generateUUID(),
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: generateUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
  },
];

export const offerById: TOfferById = {
  id: generateUUID(),
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.3731,
      longitude: 4.8913,
      zoom: 12,
    },
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.873877537499948,
    zoom: 8,
  },
  isFavorite: false,
  isPremium: true,
  rating: 2,
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 1,
  goods: ['Wi-Fi', 'Heating', 'Washing machine', 'Towels'],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'img/avatar-max.jpg',
    isPro: true,
  },
  images: [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/apartment-01.jpg',
  ],
  maxAdults: 4,
};

export const offersNearby: TOffer[] = offers.slice(1, 4);
