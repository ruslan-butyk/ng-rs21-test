import { FacebookGeoJson } from './model/facebook-geo-json.type';
import { TwitterGeoJson } from './model/twitter-geo-json.type';

export const FB_DATA: FacebookGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-106.62, 35.10]
      },
      properties: {
        place: 'Planet Fitness - Albuquerque, Gibson, NM',
        type: 'Sports/recreation/activities',
        checkins: 2911,
      }
    }
  ]
};

export const TWITTER_DATA: TwitterGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-101.62, 34.10]
      },
      properties: {
        username: 'TrapShawtyyy',
        tweet: 'Yoooo that stripped shirt makes my boobs look all big ',
        datetime: '2014-10-30T22:10:36'
      }
    }
  ]
};

export const PLACE_TYPES_DATA: string[] = [
  'Local business',
  'Spas/beauty/personal care',
  'Restaurant/cafe',
  'Real estate',
  'Education'
];
