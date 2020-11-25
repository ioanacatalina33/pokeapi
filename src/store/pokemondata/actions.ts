import * as Types from "./types";

export function fetchPokemons(): Types.PokemonsFetchingAction {
  return {
    type: Types.POKEMONS_FETCHING,
  };
}

export function pokemonsFetched(pokemons: {
  [key: string]: Types.PokemonData;
}): Types.PokemonsFetchedAction {
  return {
    type: Types.POKEMONS_FETCHED,
    payload: pokemons,
  };
}

export function errorFetchingPokemons(): Types.PokemonsFetchErrorAction {
  return {
    type: Types.POKEMONS_FETCH_ERROR,
  };
}

export function fetchDetails(pokemons: Types.PokemonData[]): Types.DetailsFetchingAction {
  return {
    type: Types.DETAILS_FETCHING,
    payload: pokemons,
  };
}

export function fetchDetailsWithOffset(
  offset: number,
  limit: number
): Types.DetailsOffsetLimitAction {
  return {
    type: Types.GET_DETAILS_WITH_OFFSET,
    offset: offset,
    limit: limit,
  };
}

export function fetchOnePokemonDetails(name: string): Types.GetOnePokemonDetailsAction {
  return {
    type: Types.GET_DETAILS_ONE_POKEMON,
    name: name,
  };
}

export function getDetails(pokemons: Types.PokemonData[]): Types.getDetailsAction {
  return {
    type: Types.GET_DETAILS,
    payload: pokemons,
  };
}

export function detailsFetched(
  pokemons: Types.PokemonData[]
): Types.DetailsFetchedAction {
  return {
    type: Types.DETAILS_FETCHED,
    payload: pokemons,
  };
}

export function addCharacteristicsDesc(
  characteristics: Types.CharacteristicsDesc[]
): Types.AddCharacteristicsDesc {
  return {type: Types.ADD_CHARACTERISTICS_DESC, payload: characteristics};
}

export function fetchDetailsError(
  pokemons: Types.PokemonData[]
): Types.DetailsFetchError {
  return {
    type: Types.DETAILS_ERROR,
    payload: pokemons,
  };
}

export function fetchDescription(name: string): Types.DescriptionFetchingAction {
  return {
    type: Types.DESCRIPTION_FETCHING,
    pokemonName: name,
  };
}

export function startFetchDescription(name: string): Types.DescriptionStartFetchAction {
  return {
    type: Types.DESCRIPTION_START_FETCH,
    pokemonName: name,
  };
}

export function descriptionFetched(
  pokemonName: string,
  description: string
): Types.DescriptionFetchedAction {
  return {
    type: Types.DESCRIPTION_FETCHTED,
    payload: {pokemonName: pokemonName, description: description},
  };
}

export function errorFetchingDescription(
  name: string
): Types.DescriptionFetchErrorAction {
  return {
    type: Types.DESCRIPTION_FETCH_ERROR,
    pokemonName: name,
  };
}
