import {
  POKEMONS_FETCHED,
  POKEMONS_FETCHING,
  POKEMONS_FETCH_ERROR,
  PokemonState,
  PokemonActionsTypes,
  DESCRIPTION_FETCHTED,
  DESCRIPTION_FETCH_ERROR,
  DETAILS_FETCHING,
  DETAILS_FETCHED,
  DETAILS_ERROR,
  PokemonData,
  ADD_CHARACTERISTICS_DESC,
  DESCRIPTION_START_FETCH,
} from "./types";
const initialState: PokemonState = {
  pokemons: {},
  isPokemonsListLoading: false,
  isPokemonsListError: false,
  characteristics: [],
};

export function pokemonDataReducer(
  state = initialState,
  action: PokemonActionsTypes
): PokemonState {
  switch (action.type) {
    case POKEMONS_FETCHING: {
      return {
        ...state,
        isPokemonsListLoading: true,
        isPokemonsListError: false,
      };
    }
    case POKEMONS_FETCHED: {
      return {
        ...state,
        pokemons: {...state.pokemons, ...action.payload},
        isPokemonsListLoading: false,
      };
    }
    case POKEMONS_FETCH_ERROR: {
      return {
        ...state,
        isPokemonsListLoading: false,
        isPokemonsListError: true,
      };
    }
    case DETAILS_FETCHING: {
      const pokemonDataObj = action.payload.reduce(
        (pokemonDataObj: {[key: string]: PokemonData}, pokemonData: PokemonData) => {
          pokemonDataObj[pokemonData.name] = {
            ...pokemonData,
            isDetailsLoading: true,
          };
          return pokemonDataObj;
        },
        {}
      );
      return {
        ...state,
        pokemons: {...state.pokemons, ...pokemonDataObj},
      };
    }
    case DETAILS_FETCHED: {
      const pokemonDataObj = action.payload.reduce(
        (pokemonDataObj: {[key: string]: PokemonData}, pokemonData: PokemonData) => {
          pokemonDataObj[pokemonData.name] = {
            ...pokemonData,
          };
          return pokemonDataObj;
        },
        {}
      );
      return {
        ...state,
        pokemons: {...state.pokemons, ...pokemonDataObj},
      };
    }
    case DETAILS_ERROR: {
      const pokemonDataObj = action.payload.reduce(
        (pokemonDataObj: {[key: string]: PokemonData}, pokemonData: PokemonData) => {
          pokemonDataObj[pokemonData.name] = {
            ...pokemonData,
            isDetailsLoading: false,
            isDetailsError: true,
          };
          return pokemonDataObj;
        },
        {}
      );
      return {
        ...state,
        pokemons: {...state.pokemons, ...pokemonDataObj},
      };
    }

    case DESCRIPTION_START_FETCH: {
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [action.pokemonName]: {
            ...state.pokemons[action.pokemonName],
            isDescriptionLoading: true,
            isDescriptionError: false,
          },
        },
      };
    }
    case DESCRIPTION_FETCHTED: {
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [action.payload.pokemonName]: {
            ...state.pokemons[action.payload.pokemonName],
            description: action.payload.description,
            isDescriptionLoading: false,
          },
        },
      };
    }
    case DESCRIPTION_FETCH_ERROR: {
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [action.pokemonName]: {
            ...state.pokemons[action.pokemonName],
            isDescriptionLoading: false,
            isDescriptionError: true,
          },
        },
      };
    }
    case ADD_CHARACTERISTICS_DESC: {
      return {
        ...state,
        characteristics: action.payload,
      };
    }
    default:
      return state;
  }
}
