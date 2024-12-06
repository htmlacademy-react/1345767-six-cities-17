export type TCityTypes =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type TCityOffers = Record<TCityTypes, TOffer[]>;

export type THousingTypes = 'apartment' | 'room' | 'house' | 'hotel';

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: TCityTypes;
  location: TLocation;
};

export type TOffer = {
  id: string;
  title: string;
  type: THousingTypes;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TOfferById = Omit<TOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};