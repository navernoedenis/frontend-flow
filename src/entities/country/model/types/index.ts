import type { Country } from '../constants';

export type CountriesRecord = Record<Country, string>;

export interface CountryOption {
  title: string;
  value: string;
}
