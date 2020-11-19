import {
  PokemonsFetchedAction,
  OnePokemonFetchedAction,
  PokemonData,
  OnePokemonFetchErrorAction,
  PokemonsFetchErrorAction,
  POKEMONS_FETCHING,
  POKEMONS_FETCH_ERROR,
  ONE_POKEMON_FETCHING,
  ONE_POKEMON_FETCHED,
  ONE_POKEMON_FETCH_ERROR,
  POKEMONS_FETCHED,
} from "./types";

export function fetchPokemons() {
  return {
    type: POKEMONS_FETCHING,
  };
}

export function fetchOnePokemon(name: string) {
  return {
    type: ONE_POKEMON_FETCHING,
    pokemonName: name,
  };
}

export function pokemonsFetched(pokemons: {
  [key: string]: PokemonData;
}): PokemonsFetchedAction {
  return {
    type: POKEMONS_FETCHED,
    payload: pokemons,
  };
}

export function onePokemonFetched(pokemon: PokemonData): OnePokemonFetchedAction {
  return {
    type: ONE_POKEMON_FETCHED,
    payload: pokemon,
  };
}

export function errorFetchingPokemons(): PokemonsFetchErrorAction {
  return {
    type: POKEMONS_FETCH_ERROR,
  };
}

export function errorFetchingOnePokemon(name: string): OnePokemonFetchErrorAction {
  return {
    type: ONE_POKEMON_FETCH_ERROR,
    pokemonName: name,
  };
}
