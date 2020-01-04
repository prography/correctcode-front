export type Repo = {
  id: string;
  type: string;
  name: string;
  url: string;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Branch = {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
};

export type BranchStatus = 'ahead' | 'behind' | 'identical';
