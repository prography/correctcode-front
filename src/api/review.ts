import fetcher from 'utils/fetcher';
import { Review, UserType, NewReview } from 'models/review';

export const createReview = async (repoId: string, review: NewReview) => {
  const { data } = await fetcher.post<{ data: NewReview }>(
    `/repositories/${repoId}/reviews`,
    review,
  );
  return data.data;
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
