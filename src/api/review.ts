import fetcher from 'utils/fetcher';
import { Review, ReviewType } from 'models/review';

export const createReview = async (repoId: string) => {
  const { data } = await fetcher.post<any>(`/repositories/${repoId}/reviews`);
  return data;
};

export const getReviewList = async (userId: string, reviewType: ReviewType) => {
  const { data } =
    reviewType === ReviewType.REVIEWEE
      ? await fetcher.get<{ data: Review[] }>(`reviewees/${userId}/reviews`)
      : reviewType === ReviewType.REVIEWER
      ? await fetcher.get<{ data: Review[] }>(`reviews`)
      : await fetcher.get<{ data: Review[] }>(`reviewers/1/reviews`);
  return data.data;
};
