export const URL_MARKER_DEFAULT = 'public/img/pin.svg';

export const URL_MARKER_CURRENT = 'public/img/pin-active.svg';

export const VoyagerMapLayer =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  No_Auth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityTypes {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum SortTypes {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  TopRated = 'Top rated first',
}
