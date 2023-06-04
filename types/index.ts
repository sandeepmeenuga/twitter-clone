export type UserType = {
  id: string;
  name: string;
  username: string;
  image?: string;
};

export type TweetType = {
  id: string;
  content: string;
  user: UserType;
  createdAt: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};
