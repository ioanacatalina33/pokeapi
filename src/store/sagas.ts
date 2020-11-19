import {call, put, spawn, takeLatest, takeEvery, fork, all} from "redux-saga/effects";
import API from "../api";
import {PokemonData, ONE_POKEMON_FETCHING, POKEMONS_FETCHING} from "./pokemondata/types";
import * as PokemonActions from "./pokemondata/actions";

export default function* rootSaga() {
  yield takeLatest(POKEMONS_FETCHING, fetchPokemons);
  yield takeEvery(ONE_POKEMON_FETCHING, fetchOnePokemon, "test");
}

/* Fetches the list of Pokemons and update the store so that they are displayed imediately in the view.
   For each pokemon, calls in parallel a generator function that will retrieve all data for that pokemon
 */
function* fetchPokemons() {
  let pokemons: {[key: string]: PokemonData} = {};
  try {
    pokemons = yield call(API.getPokemons, 0, 150);
    yield put(PokemonActions.pokemonsFetched(pokemons));
  } catch (e) {
    console.log(`Error fetching the pokemons. Error: ${e} Message: ${e.message}`);
    yield put(PokemonActions.errorFetchingPokemons());
  }

  // Dispath actions to fetch every Pokemon (ran simultanously)
  const functionCalls: any = [];
  for (let pokemon in pokemons) {
    functionCalls.push(call(fetchOnePokemon, pokemons[pokemon].name));
  }
  yield all(functionCalls);
}

function* fetchOnePokemon(name: string) {
  try {
    const pokemon = yield call(API.getPokemon, name);
    yield put(PokemonActions.onePokemonFetched(pokemon));
  } catch (e) {
    console.log(`Error fetching the pokemon ${name}. Error: ${e} Message: ${e.message}`);
    yield put(PokemonActions.errorFetchingOnePokemon(name));
  }
}
