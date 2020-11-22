import {
  mapPokemons,
  mapOnePokemon,
  mapStatsToCharacteristicsUrl,
  mapCharacteristicDescription,
} from "./pokeApiMapper";
import {PokemonData} from "../store/pokemondata/types";
import * as PokeApi from "./api/pokeApi";

/*
  Calls to get a pokemons list response and maps the response 
*/
export function fetchPokemons(offset: number, limit: number) {
  return PokeApi.getPokemons(offset, limit).then((res): {[key: string]: PokemonData} =>
    mapPokemons(res.data)
  );
}

/*
  Calls to get a pokemon and maps the response to a PokemonData.
  In case it fails, returns a PokemonData with isDetailsError set to true
*/
export function fetchPokemon(pokemonName: string) {
  return PokeApi.getPokemon(pokemonName)
    .then((res): PokemonData => mapOnePokemon(res.data))
    .catch((e) => {
      console.log(`Error fecting the pokemon ${pokemonName}. Error: ${e}`);
      return {
        name: pokemonName,
        isDetailsLoading: false,
        isDetailsError: true,
        isDescriptionLoading: false,
        isDescriptionError: false,
      };
    });
}

/*
  Calls the url provided to get a stat response and retrieves all the caracteristics url strings from the response  
*/
export function fetchCharacteristicsFromStat(url: string) {
  return PokeApi.getFromURL(url).then((res): string[] =>
    mapStatsToCharacteristicsUrl(res.data)
  );
}

/*
  Calls the url provided to get a characteristic response and retrieves the description field in one language  
*/
export function fetchDescriptionFromCharacteristic(url: string, lang: string) {
  return PokeApi.getFromURL(url).then((res): string =>
    mapCharacteristicDescription(res.data, lang)
  );
}
