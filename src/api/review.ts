import fetcher from 'utils/fetcher';
import { Review, UserType } from 'models/review';

export const createReview = async (repoId: string) => {
  const { data } = await fetcher.post<any>(`/repositories/${repoId}/reviews`);
  return data;
};

export const getReviews = async () => {
  const { data } = await fetcher.get<{ data: Review[] }>(`/reviews`);
  return data.data;
};

export const getUserReviews = async (userId: string, userType: UserType) => {
  const route = userType === UserType.REVIEWEE ? 'reviewees' : 'reviewers';
  const { data } = await fetcher.get<{ data: Review[] }>(
    `/${route}/${userId}/reviews`,
  );
  return data.data;
};
