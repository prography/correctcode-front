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
  status: string;
  startedAt: string;
  endedAt: string;
  commentCount: string;
};

export enum UserType {
  REVIEWEE = 'reviewee',
  REVIEWER = 'reviewer',
}
