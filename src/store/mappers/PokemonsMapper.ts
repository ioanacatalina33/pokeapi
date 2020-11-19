import {PokemonData, PokemonDetails} from "../pokemondata/types";

/* Maps the response of a pokemon list with a list of PokemonData
isLoading is set to true since not all the data from the PokemonData is fetched
 */
export function mapPokemonsToPokemonData(resData: any): PokemonData[] {
  const pokemonsRes = resData.results;
  const pokemonsData: PokemonData[] = [];
  pokemonsRes.forEach((pokemonRes: any) =>
    pokemonsData.push({name: pokemonRes.name, isLoading: true, isError: false})
  );
  return pokemonsData;
}

/* Maps the response of a pokemon details request with the PokemonData
isLoading is set to false, all the data for the PokemonData is being fetched
 */
export function mapPokemonToFullPokemonData(pokemonRes: any, name: string): PokemonData {
  const pokemonData: PokemonData = {
    name: name,
    isLoading: false,
    isError: false,
  };

  const stats: string[] = pokemonRes.stats.map((statObj: any) => statObj.stat.name);
  const types: string[] = pokemonRes.types.map((statObj: any) => statObj.type.name);
  const profilepic: string = pokemonRes.sprites.other["official-artwork"].front_default;

  const details: PokemonDetails = {
    sprites: {...pokemonRes.sprites},
    stats: stats,
    types: types,
    isDescriptionLoading: false,
  };
  pokemonData.details = details;
  pokemonData.profilePic = profilepic;

  return pokemonData;
}
