import {
  POKEMONS_FETCHED,
  POKEMONS_FETCHING,
  POKEMONS_FETCH_ERROR,
  ONE_POKEMON_FETCHED,
  ONE_POKEMON_FETCH_ERROR,
  PokemonState,
  PokemonActionsTypes,
} from "./types";
const initialState: PokemonState = {
  pokemons: {},
  isPokeDataLoading: false,
  isPokeDataError: false,
};

export function pokemonDataReducer(
  state = initialState,
  action: PokemonActionsTypes
): PokemonState {
  switch (action.type) {
    case POKEMONS_FETCHED: {
      return {
        ...state,
        pokemons: action.payload,
        isPokeDataLoading: false,
      };
    }
    case POKEMONS_FETCHING: {
      return {
        ...state,
        isPokeDataLoading: true,
        isPokeDataError: false,
      };
    }
    case POKEMONS_FETCH_ERROR: {
      return {
        ...state,
        isPokeDataLoading: false,
        isPokeDataError: true,
      };
    }
    case ONE_POKEMON_FETCHED: {
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [action.payload.name]: {
            ...state.pokemons[action.payload.name],
            ...action.payload,
          },
        },
      };
    }
    case ONE_POKEMON_FETCH_ERROR: {
      let pokemonUpdate = {isError: true, isLoading: false};
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [action.pokemonName]: {
            ...state.pokemons[action.pokemonName],
            ...pokemonUpdate,
          },
        },
      };
    }
    default:
      return state;
  }
}
