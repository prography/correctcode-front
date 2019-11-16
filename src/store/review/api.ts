import fetcher from 'utils/fetcher';
import { Review } from 'models/review';

export const reviewList = async () => {
  const { data } = await fetcher.get('/reviews');
  return data;
};
