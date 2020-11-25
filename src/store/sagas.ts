import {call, put, takeLatest, takeEvery, all, select, take} from "redux-saga/effects";
import PokeService from "../services";
import {
  PokemonData,
  POKEMONS_FETCHING,
  DESCRIPTION_FETCHING,
  DescriptionFetchingAction,
  GET_DETAILS,
  DetailsFetchingAction,
  CharacteristicsDesc,
  POKEMONS_FETCHED,
  GET_DETAILS_WITH_OFFSET,
  DetailsOffsetLimitAction,
  GET_DETAILS_ONE_POKEMON,
  GetOnePokemonDetailsAction,
  DETAILS_FETCHED,
} from "./pokemondata/types";
import * as PokemonActions from "./pokemondata/actions";
import {RootState} from ".";

export const getCharacteristics = (state: RootState): CharacteristicsDesc[] =>
  state.pokemonStore.characteristics;
export const getPokemons = (state: RootState): PokemonData[] =>
  Object.values(state.pokemonStore.pokemons);
export const getPokemonByName = (
  state: RootState,
  name: string
): PokemonData | undefined => state.pokemonStore.pokemons[name];

export default function* rootSaga() {
  yield takeLatest(POKEMONS_FETCHING, getAllPokemons);
  yield takeEvery(GET_DETAILS, getPokemonsDetails);
  yield takeEvery(GET_DETAILS_WITH_OFFSET, fetchDetailsWithOffset);
  yield takeEvery(GET_DETAILS_ONE_POKEMON, getOnePokemonDetails);
  yield takeEvery(DESCRIPTION_FETCHING, getDescription);
}

/* 
    Fetches the list of Pokemons from first generation and calls action to update the store.
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
}

/*
    Fetches pokemons' details where it is not set.
    Updates the store.
 */
function* getPokemonsDetails(action: DetailsFetchingAction) {
  const pokemonsWithoutDetails = action.payload.filter(
    (p) => !p.details && !p.isDetailsLoading && !p.isDetailsError
  );
  try {
    yield put(PokemonActions.fetchDetails(pokemonsWithoutDetails));
    const pokemonsList: PokemonData[] = yield all(
      pokemonsWithoutDetails.map((pokemon) =>
        call(PokeService.fetchPokemon, pokemon.name)
      )
    );
    yield put(PokemonActions.detailsFetched(pokemonsList));
  } catch (e) {
    console.log(`Error fetching pokemons details. Message: ${e}`);
    yield put(PokemonActions.fetchDetailsError(pokemonsWithoutDetails));
  }
}

/* 
    Fetches pokemons details from the api with offset and limit.
    First waits till the pokemons list is loaded in the store, then calls the
    action to fetch pokemons between offset and limit
 */
function* fetchDetailsWithOffset(action: DetailsOffsetLimitAction) {
  let pokemons: PokemonData[] = yield select(getPokemons);
  if (!pokemons.length) {
    yield take(POKEMONS_FETCHED);
    pokemons = yield select(getPokemons);
  }
  yield put(PokemonActions.getDetails(pokemons.slice(action.offset, action.limit)));
}

/*
  Fetches one pokemon from the store by name.
  First waits for the list of pokemons from store to be availabe.
*/
function* getOnePokemonDetails(action: GetOnePokemonDetailsAction) {
  let pokemonToFetch = yield select(getPokemonByName, action.name);
  if (!pokemonToFetch) {
    yield take(POKEMONS_FETCHED);
    pokemonToFetch = yield select(getPokemonByName, action.name);
  }
  yield put(PokemonActions.getDetails([pokemonToFetch]));
}

/*
    Fetches the description for one pokemon. Steps:
       - waits for the pokemon and it's stats to be available in store
       - calls in parallel to fetch the list of characteristics urls from each stat of the Pokemons
       - combines the lists of characteristics urls into one single list
       - checks which characteristics urls are already in store and creates the description from them
       - fetches the description for the other characteristics from API
       - combines descriptions into one and update the store

       Note: For a more complex aplication some of these steps could be reused so it would be better to have smaller functions
*/
function* getDescription(action: DescriptionFetchingAction) {
  try {
    //Waits for the pokemon and it's stats to be available in store
    let pokemon: PokemonData | undefined = yield select(
      getPokemonByName,
      action.pokemonName
    );
    while (!pokemon || !pokemon.details) {
      yield take(DETAILS_FETCHED);
      pokemon = yield select(getPokemonByName, action.pokemonName);
    }

    if (pokemon && pokemon.details) {
      yield put(PokemonActions.startFetchDescription(action.pokemonName));

      // calls in parallel to fetch the list of characteristics urls from each stat of the Pokemons
      const statCharacteristicsUrls: string[][] = yield all(
        pokemon.details.stats.map((stat) =>
          call(PokeService.fetchCharacteristicsFromStat, stat.url)
        )
      );

      // combines the lists of characteristics urls into one single list
      const totalCharacteristicsURL: string[] = statCharacteristicsUrls.reduce(
        (urlsTotal: string[], urls: string[]) => (urlsTotal = urlsTotal.concat(urls)),
        []
      );

      // checks which characteristics urls are already in store and create the description from them
      // fetches the other characteristics description from api
      let storeCharacteristicsDesc: CharacteristicsDesc[] = yield select(
        getCharacteristics
      );
      let finalDescription = "";
      const newUrls: string[] = [];
      totalCharacteristicsURL.forEach((url) => {
        const characteristicsFromStore = storeCharacteristicsDesc.filter(
          (c: CharacteristicsDesc) => c.url === url
        );
        if (characteristicsFromStore.length === 0) {
          newUrls.push(url);
        } else {
          finalDescription = finalDescription.concat(
            characteristicsFromStore[0].description + ". "
          );
        }
      });

      // calls in paralel to fetch the characteristics description from each url
      const charactDescriptions = yield all(
        newUrls.map((charact) =>
          call(PokeService.fetchDescriptionFromCharacteristic, charact, "en")
        )
      );

      // combines descriptions into one and update the store
      finalDescription = finalDescription.concat(
        charactDescriptions.map((ch: CharacteristicsDesc) => ch.description).join(". ")
      );
      yield put(PokemonActions.descriptionFetched(action.pokemonName, finalDescription));
      storeCharacteristicsDesc = storeCharacteristicsDesc.concat(charactDescriptions);
      yield put(
        PokemonActions.addCharacteristicsDesc(
          storeCharacteristicsDesc.filter(
            (charact, i, self) => self.indexOf(charact) === i
          )
        )
      );
    }
  } catch (e) {
    console.log(
      `Error fetching the description for pokemon: ${action.pokemonName}. Message: ${e}`
    );
    yield put(PokemonActions.errorFetchingDescription(action.pokemonName));
  }
}
