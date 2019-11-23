import fetcher from 'utils/fetcher';
import { Review, ReviewType } from 'models/review';

export const createReview = async (repoId: string) => {
  const { data } = await fetcher.post<any>(`/repositories/${repoId}/reviews`);
  return data;
};

export const getReviewList = async (userId: string, reviewType: ReviewType) => {
  const route = reviewType === ReviewType.REVIEWEE ? 'reviewees' : 'reviewers';
  const { data } = await fetcher.get<{ data: Review[] }>(
    `${route}/${userId}/reviews`,
  );
  return data.data;
};
