export interface TwitLocation {
  type: string;
  coordinates: number[];
}

export interface Tweet {
  username: string;
  tweet: string;
  datetime: string;
  location: TwitLocation;
}
