import fetcher from 'utils/fetcher';
import { Review } from 'models/review';

export const createReview = async (repoId: string) => {
  const { data } = await fetcher.post<any>(`/repositories/${repoId}/reviews`);
  return data;
};

export const getReviewList = async () => {
  const { data } = await fetcher.get('/reviews');
  return data;
};
