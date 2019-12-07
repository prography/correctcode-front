export type ReviewStatus = 'ongoing' | 'pending' | 'completed';

export type Review = {
  id: string;
  createdAt: string;
  updatedAt: string;
  serviceId: string;
  serviceType: string;
  repositoryId: string;
  repositoryUrl: string;
  title: string;
  description: string;
  base: string;
  head: string;
  number: string;
  status: ReviewStatus;
  startedAt: string;
  endedAt: string;
  commentCount: string;
  language: string;
  reviewee: {
    name: string;
    profileImg: string;
  };
  reviewer: {
    name: string;
    profileImg: string;
  };
};

export type NewReview = Pick<Review, 'title' | 'description' | 'head' | 'base'>;

export enum UserType {
  REVIEWEE = 'reviewee',
  REVIEWER = 'reviewer',
}
