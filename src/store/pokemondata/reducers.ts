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
  pokemons: [],
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
      let pokemons = state.pokemons.slice();
      let pokemon = pokemons.find((poke) => poke.name === action.payload.name);
      if (pokemon) {
        pokemon.details = action.payload.details;
        pokemon.isError = action.payload.isError;
        pokemon.isLoading = action.payload.isLoading;
        pokemon.profilePic = action.payload.profilePic;
      }
      return {
        ...state,
        pokemons: pokemons,
      };
    }
    case ONE_POKEMON_FETCH_ERROR: {
      let pokemons = state.pokemons.slice();
      let pokemon = pokemons.find((poke) => poke.name === action.pokemonName);
      if (pokemon) {
        pokemon.isError = true;
        pokemon.isLoading = false;
      }
      return {
        ...state,
        pokemons: pokemons,
      };
    }
    default:
      return state;
  }
}
