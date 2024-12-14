import { TComment } from '../types/comments.ts';
import { generateUUID } from '../utils/generateUUID.ts';

export const comments: TComment[] = [
  {
    id: generateUUID(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: generateUUID(),
    date: '2021-04-12T14:13:56.569Z',
    user: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    comment: "It's fucking fuck!!!",
    rating: 1,
  },
];
