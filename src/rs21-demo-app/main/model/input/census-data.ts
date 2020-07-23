export interface CensusCategory {
  type: string;
  category: string;
  subtype: string;
  gender: string;
  min: number;
  max: number;
  meta_index: string;
}

export interface CensusFilter {
  GEOID: string;
  [prop: string]: string;
}

export interface CensusData {
  categories: CensusCategory[];
  filter: CensusFilter[];
}
