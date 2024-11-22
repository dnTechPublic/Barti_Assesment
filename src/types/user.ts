export type User = {
  firstName: string;
  lastName: string;
  birthDate: string; // normally would type this as a Date, but RHF doesn't play well with the Date type
  city: string;
  state: string;
  favoriteDisneyCharater: string;
  favoriteDisneyMovie: string;
  favoriteDisneyLand: string;
  favoriteDisneyRide: string;
  lastUpdated: string;
};
