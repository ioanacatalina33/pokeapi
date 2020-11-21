export const POKEMONS_FETCHING = "FETCH_POKE_LIST";
export const POKEMONS_FETCHED = "FETCHED_POKE_LIST";
export const POKEMONS_FETCH_ERROR = "ERROR_POKE_LIST";

export const DETAILS_FETCHING = "FETCHING_DETAILS";
export const DETAILS_FETCHED = "FETCHED_DETAILS";
export const DETAILS_ERROR = "ERROR_DETAILS";

export const DESCRIPTION_FETCHING = "FETCH_DESC";
export const DESCRIPTION_FETCHTED = "FETCHED_DESC";
export const DESCRIPTION_FETCH_ERROR = "ERROR_DESCR";

export interface PokemonState {
  pokemons: {[key: string]: PokemonData}; // list of all the pokemons
  isPokemonsListLoading: boolean; // true if the list of all pokemons is being fetched
  isPokemonsListError: boolean; // true if there was an error fetching the list of pokemons
}

export interface PokemonData {
  name: string;
  isDetailsLoading: boolean; // true if an action to fetch pokemon details was called
  isDetailsError: boolean; // true if fetching pokemon details had an error
  details?: {
    profilePic: string;
    sprites: PokemonSprites;
    stats: Stats[];
    types: string[];
  };
  description?: string;
  isDescriptionLoading: boolean; // true if an action to fetch description was called
  isDescriptionError: boolean; // true if fetching pokemon description had an error
}

export interface Stats {
  name: string;
  baseStat: string;
  effort: number;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
  back_female?: string;
  back_shiny_female?: string;
  back_default?: string;
  front_female?: string;
  front_shiny_female?: string;
  back_shiny?: string;
  front_shiny?: string;
}

export interface PokemonsFetchingAction {
  type: typeof POKEMONS_FETCHING;
}

export interface DetailsFetchingAction {
  type: typeof DETAILS_FETCHING;
  payload: PokemonData[];
}

export interface DescriptionFetchingAction {
  type: typeof DESCRIPTION_FETCHING;
  payload: {
    pokemonName: string;
    statsUrls: string[];
  };
}

export interface PokemonsFetchedAction {
  type: typeof POKEMONS_FETCHED;
  payload: {[key: string]: PokemonData};
}

export interface DetailsFetchedAction {
  type: typeof DETAILS_FETCHED;
  payload: PokemonData[];
}

export interface DescriptionFetchedAction {
  type: typeof DESCRIPTION_FETCHTED;
  payload: {pokemonName: string; description: string};
}

export interface PokemonsFetchErrorAction {
  type: typeof POKEMONS_FETCH_ERROR;
}

export interface DetailsFetchError {
  type: typeof DETAILS_ERROR;
  payload: PokemonData[];
}

export interface DescriptionFetchErrorAction {
  type: typeof DESCRIPTION_FETCH_ERROR;
  pokemonName: string;
}

export type PokemonActionsTypes =
  | PokemonsFetchingAction
  | PokemonsFetchedAction
  | PokemonsFetchErrorAction
  | DescriptionFetchingAction
  | DescriptionFetchedAction
  | DescriptionFetchErrorAction
  | DetailsFetchingAction
  | DetailsFetchedAction
  | DetailsFetchError;
