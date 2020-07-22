import { TweetSentiment } from './tweet-sentiment.enum';

export interface TweetMetaData {
  username: string;
  message: string;
  datetime: string;
  sentiment: TweetSentiment;
}
