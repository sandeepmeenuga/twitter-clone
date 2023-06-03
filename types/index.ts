export type UserType = {
  id: string;
  name: string;
  username: string;
  image?: string;
};

export type TweetType = {
  content: string;
  user: UserType;
  createdAt: "2020-08-27T12:00:00.000Z";
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
};
