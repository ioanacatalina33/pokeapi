export const INCREMENT_CARDS_LIMIT = "CARDS_NR";
export const RESET_CARDS_LIMIT = "RESET_CARDS_LIMIT";
export const SEARCH_QUERY = "QUERY";

export const LIMIT_INCREMENT = 20;
export const DEFAULT_LIMIT = 32;

export interface AppStates {
  cardsLimit: number; // number of pokemons cards displayed on screen
  query: string; // search query
}

export interface CardsLimitAction {
  type: typeof INCREMENT_CARDS_LIMIT;
}

export interface ResetCardsLimitAction {
  type: typeof RESET_CARDS_LIMIT;
}

export interface SearchQueryAction {
  type: typeof SEARCH_QUERY;
  query: string;
}

export type AppStatesAction =
  | CardsLimitAction
  | SearchQueryAction
  | ResetCardsLimitAction;
