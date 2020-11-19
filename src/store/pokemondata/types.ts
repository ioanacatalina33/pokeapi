export const GET_POKEMONS = "GET_POKE";
export const POKEMONS_FETCHING = "POKE_FETCHING";
export const POKEMONS_FETCHED = "POKE_FETCHED";
export const POKEMONS_FETCH_ERROR = "POKE_FETCH_ERROR";

export const ONE_POKEMON_FETCHING = "GET_ONE_POKE";
export const ONE_POKEMON_FETCHED = "ONE_POKE_FETCHED";
export const ONE_POKEMON_FETCH_ERROR = "ONE_POKE_FETCH_ERROR";

export interface PokemonState {
  pokemons: PokemonData[];
  isPokeDataLoading: boolean;
  isPokeDataError: boolean;
}

export interface PokemonData {
  name: string;
  isLoading: boolean;
  isError: boolean;
  profilePic?: string;
  details?: PokemonDetails;
}

export interface PokemonDetails {
  sprites: PokemonSprites;
  stats: string[];
  types: string[];
  description?: string;
  isDescriptionLoading: boolean;
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

export interface OnePokemonFetchingAction {
  type: typeof ONE_POKEMON_FETCHING;
  name: string;
}

export interface PokemonsFetchedAction {
  type: typeof POKEMONS_FETCHED;
  payload: PokemonData[];
}

export interface OnePokemonFetchedAction {
  type: typeof ONE_POKEMON_FETCHED;
  payload: PokemonData;
}

export interface PokemonsFetchErrorAction {
  type: typeof POKEMONS_FETCH_ERROR;
}

export interface OnePokemonFetchErrorAction {
  type: typeof ONE_POKEMON_FETCH_ERROR;
  pokemonName: string;
}

export type PokemonActionsTypes =
  | PokemonsFetchingAction
  | PokemonsFetchedAction
  | PokemonsFetchErrorAction
  | OnePokemonFetchedAction
  | OnePokemonFetchErrorAction
  | OnePokemonFetchingAction;
