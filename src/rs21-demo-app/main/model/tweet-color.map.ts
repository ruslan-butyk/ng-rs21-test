import { TweetSentiment } from './tweet-sentiment.enum';

export const TWEET_COLOR_MAP: {[prop: string]: string} = Object.freeze({
  [TweetSentiment.Neutral]: 'rgba(0, 0, 0, 0.36)',
  [TweetSentiment.Positive]: 'rgb(63, 81, 181)',
  [TweetSentiment.Negative]: 'rgb(244, 67, 54)'
});
