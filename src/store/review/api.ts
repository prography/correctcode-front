import fetcher from 'utils/fetcher';

export const reviewList = async () => {
  const { data } = await fetcher.get('/reviews');
  return data;
};
