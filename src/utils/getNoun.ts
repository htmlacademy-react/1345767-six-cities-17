export const getNoun = (word: string, count: number) =>
  `${count} ${word}${count === 1 ? '' : 's'}`;
