import {CharacteristicsDesc, PokemonData, Stat} from "../store/pokemondata/types";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */

const generateDefaultPokemonData = function (name: string): PokemonData {
  return {
    name: name,
    isDetailsLoading: false,
    isDetailsError: false,
    isDescriptionLoading: false,
    isDescriptionError: false,
  };
};

/* 
    Maps the get pokemon list response with a list of PokemonData
 */
export function mapPokemons(resData: any): {[key: string]: PokemonData} {
  const pokemonsRes = resData.results;
  const pokemonsData: {[key: string]: PokemonData} = {};
  pokemonsRes.forEach(
    (pokemonRes: any) =>
      (pokemonsData[pokemonRes.name] = generateDefaultPokemonData(pokemonRes.name))
  );
  return pokemonsData;
}

/* 
    Maps the get pokemon details response with the PokemonData
 */
export function mapOnePokemon(pokemonRes: any): PokemonData {
  const stats: Stat[] = pokemonRes.stats.map((statObj: any) => {
    return {
      name: statObj.stat.name,
      baseStat: statObj.base_stat,
      effort: statObj.effort,
      url: statObj.stat.url,
    };
  });
  const types: string[] = pokemonRes.types.map((statObj: any) => statObj.type.name);
  const profilepic: string = pokemonRes.sprites.other["official-artwork"].front_default;
  const {other, versions, ...sprites} = pokemonRes.sprites; // eslint-disable-line

  const pokemonData = generateDefaultPokemonData(pokemonRes.name);
  pokemonData.details = {
    profilePic: profilepic,
    sprites: {...sprites},
    stats: stats,
    types: types,
  };

  // for testing purposes I left one pokemon out
  if (pokemonRes.name === "slowbro") throw "Throwing some error for testing";

  return pokemonData;
}

/*
    Takes a stat response and returns a list of all the characteristics urls
*/
export function mapStatsToCharacteristicsUrl(stats: any): string[] {
  return stats.characteristics.map((char: any) => char.url);
}

/*
    Takes a characteristic response and returns its description in one language
*/
export function mapCharacteristicDescription(
  characteristicRes: any,
  lang: string,
  url: string
): CharacteristicsDesc {
  const descriptions: any[] = characteristicRes.descriptions;
  const descriptionLang = descriptions.reduce((finalDesc, desc) => {
    if (desc.language.name === lang) return (finalDesc = desc.description);
  }, "");
  return {url: url, description: descriptionLang};
}
