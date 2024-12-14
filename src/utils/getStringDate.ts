export const getStringDate = (d: string) =>
  new Date(d).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
  });
