import { Gender } from './gender.enum';

export interface CensusFilterOutput {
  gender: Gender;
  ageMin: number;
  ageMax: number;
}
