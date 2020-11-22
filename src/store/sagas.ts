import {call, put, takeLatest, takeEvery, all} from "redux-saga/effects";
import PokeService from "../services";
import {
  PokemonData,
  POKEMONS_FETCHING,
  DESCRIPTION_FETCHING,
  DescriptionFetchingAction,
  DETAILS_FETCHING,
  DetailsFetchingAction,
} from "./pokemondata/types";
import * as PokemonActions from "./pokemondata/actions";

export default function* rootSaga() {
  yield takeLatest(POKEMONS_FETCHING, getAllPokemons);
  yield takeLatest(DETAILS_FETCHING, getPokemonsDetails);
  yield takeEvery(DESCRIPTION_FETCHING, getDescription);
}

/* 
    Fetches the list of Pokemons from first generation and calls action to updates the store.
    Calls action to fetch Pokemons details.
 */
function* getAllPokemons() {
  let pokemonsObj: {[key: string]: PokemonData} = {};
  try {
    pokemonsObj = yield call(PokeService.fetchPokemons, 0, 150);
    yield put(PokemonActions.pokemonsFetched(pokemonsObj));
  } catch (e) {
    console.log(`Error fetching the pokemons list. Message: ${e}`);
    yield put(PokemonActions.errorFetchingPokemons());
  }
  yield put(PokemonActions.fetchDetails(Object.values(pokemonsObj)));
}

/* 
    Fetches each pokemon's details in parallel.
    Updates the store.
 */
function* getPokemonsDetails(action: DetailsFetchingAction) {
  try {
    const pokemonsList: PokemonData[] = yield all(
      action.payload.map((pokemon) => call(PokeService.fetchPokemon, pokemon.name))
    );
    yield put(PokemonActions.detailsFetched(pokemonsList));
  } catch (e) {
    console.log(`Error fetching pokemons details. Message: ${e}`);
    yield put(PokemonActions.fetchDetailsError(action.payload));
  }
}

/*
    Fetches the description for one pokemon. Steps:
      1. calls in parallel to fetch the list of characteristics urls from each stat of the Pokemons
      2. combines the lists of characteristics urls into one single list
      3. calls in paralel to fetch the description from each characteristics url
      4. combines descriptions into one and update the store
*/
function* getDescription(action: DescriptionFetchingAction): any {
  try {
    // 1. call in parallel to fetch the list of characteristics urls from each stat of the Pokemons
    const statCharacteristicsUrls: string[][] = yield all(
      action.payload.statsUrls.map((stat) =>
        call(PokeService.fetchCharacteristicsFromStat, stat)
      )
    );

    // 2. combine the list of lists of characteristics urls into one single list
    const totalCharacteristicsURL: string[] = statCharacteristicsUrls.reduce(
      (urlsTotal: string[], urls: string[]) => (urlsTotal = urlsTotal.concat(urls)),
      []
    );

    // 3. call in paralel to fetch the description from each characteristics url
    const descriptions = yield all(
      totalCharacteristicsURL.map((charact) =>
        call(PokeService.fetchDescriptionFromCharacteristic, charact, "en")
      )
    );

    // 4. combine descriptions into one and update the store
    const finalDescription = descriptions.join(". ");
    yield put(
      PokemonActions.descriptionFetched(action.payload.pokemonName, finalDescription)
    );
  } catch (e) {
    console.log(
      `Error fetching the description for pokemon: ${action.payload.pokemonName}. Message: ${e}`
    );
    yield put(PokemonActions.errorFetchingDescription(action.payload.pokemonName));
  }
}
