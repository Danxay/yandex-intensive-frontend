export const prepareData = (items) => ({
  entities: items.reduce((acc, cinema) => {
    acc[cinema.id] = cinema;
    return acc;
  }, {}),
});
