export const POKEMONS_FETCHING = "FETCH_POKE_LIST"; // starting the api call
export const POKEMONS_FETCHED = "FETCHED_POKE_LIST"; // ending the api call with results
export const POKEMONS_FETCH_ERROR = "ERROR_POKE_LIST"; // ending the api call with error

export const DETAILS_FETCHING = "FETCHING_DETAILS"; // starting api calls
export const DETAILS_FETCHED = "FETCHED_DETAILS"; // ending api calls with results
export const DETAILS_ERROR = "ERROR_DETAILS"; // ending api calls with error

export const GET_DETAILS_WITH_OFFSET = "FETCHING_DETAILS_OFFSET"; // handled in saga to fetch pokemons with offset and limit
export const GET_DETAILS_ONE_POKEMON = "FETCHING_ONE_POKEMON"; // handled in saga to fetch one pokemon details
export const GET_DETAILS = "GET_DETAILS"; // handled in saga before fetching the pokemon details

export const ADD_CHARACTERISTICS_DESC = "ADD_DESC_CHARACT";

export const DESCRIPTION_FETCHING = "FETCH_DESC"; // used in saga to start building the description
export const DESCRIPTION_START_FETCH = "DESC_START_FETCH"; // starting the api calls
export const DESCRIPTION_FETCHTED = "FETCHED_DESC"; // ending all api calls with result
export const DESCRIPTION_FETCH_ERROR = "ERROR_DESCR"; // ending all api calls with error

export interface PokemonState {
  pokemons: {[key: string]: PokemonData}; // list of all the pokemons
  isPokemonsListLoading: boolean; // true if the list of all pokemons is being fetched
  isPokemonsListError: boolean; // true if there was an error fetching the list of pokemons
  characteristics: CharacteristicsDesc[]; // for caching, the characteristics description calls are stored to be fetched quicker without an api call
}

export interface PokemonData {
  name: string;
  isDetailsLoading: boolean; // true if an action to fetch pokemon details was called
  isDetailsError: boolean; // true if there was an error fetching the pokemon
  details?: {
    profilePic: string;
    sprites: PokemonSprites;
    stats: Stat[];
    types: string[];
  };
  description?: string;
  isDescriptionLoading: boolean; // true if an action to fetch description was called
  isDescriptionError: boolean; // true if there was an error fetching the description
}

export interface Stat {
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

export interface PokemonsFetchedAction {
  type: typeof POKEMONS_FETCHED;
  payload: {[key: string]: PokemonData};
}

export interface PokemonsFetchErrorAction {
  type: typeof POKEMONS_FETCH_ERROR;
}

export interface DetailsFetchingAction {
  type: typeof DETAILS_FETCHING;
  payload: PokemonData[];
}

export interface getDetailsAction {
  type: typeof GET_DETAILS;
  payload: PokemonData[];
}

export interface GetOnePokemonDetailsAction {
  type: typeof GET_DETAILS_ONE_POKEMON;
  name: string;
}

export interface DetailsOffsetLimitAction {
  type: typeof GET_DETAILS_WITH_OFFSET;
  offset: number;
  limit: number;
}

export interface DetailsFetchedAction {
  type: typeof DETAILS_FETCHED;
  payload: PokemonData[];
}

export interface DetailsFetchError {
  type: typeof DETAILS_ERROR;
  payload: PokemonData[];
}

export interface DescriptionFetchingAction {
  type: typeof DESCRIPTION_FETCHING;
  pokemonName: string;
}

export interface DescriptionStartFetchAction {
  type: typeof DESCRIPTION_START_FETCH;
  pokemonName: string;
}

export interface DescriptionFetchedAction {
  type: typeof DESCRIPTION_FETCHTED;
  payload: {pokemonName: string; description: string};
}

export interface DescriptionFetchErrorAction {
  type: typeof DESCRIPTION_FETCH_ERROR;
  pokemonName: string;
}

export interface CharacteristicsDesc {
  url: string;
  description: string;
}

export interface AddCharacteristicsDesc {
  type: typeof ADD_CHARACTERISTICS_DESC;
  payload: CharacteristicsDesc[];
}

export type PokemonActionsTypes =
  | PokemonsFetchingAction
  | PokemonsFetchedAction
  | PokemonsFetchErrorAction
  | DescriptionStartFetchAction
  | DescriptionFetchedAction
  | DescriptionFetchErrorAction
  | DetailsFetchingAction
  | DetailsFetchedAction
  | DetailsFetchError
  | AddCharacteristicsDesc;
