import axios from "axios";
import {
  mapPokemonsToPokemonData,
  mapPokemonToFullPokemonData,
} from "../store/mappers/PokemonsMapper";
import {PokemonData} from "../store/pokemondata/types";
const apiGetPokemonsEndpoint = "https://pokeapi.co/api/v2/pokemon";
const apiGetPokemonEndpoint = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(offset: number, limit: number) {
  return axios
    .get(`${apiGetPokemonsEndpoint}?offset=${offset}&limit=${limit}`)
    .then((res): {[key: string]: PokemonData} => {
      if (res.status !== 200) throw "Status code " + res.status;
      //let dataaa = JSON.parse(res.data);
      let pokemonsData: {};
      try {
        pokemonsData = mapPokemonsToPokemonData(res.data);
      } catch (e) {
        console.log(`${e} Message: ${e}`);
        throw `Error parsing pokemons`;
      }
      return pokemonsData;
    });
}

export async function getPokemon(name: string) {
  console.time("calling getPokemon " + name + " time " + new Date());
  return axios.get(`${apiGetPokemonEndpoint}/${name}`).then(
    (res): PokemonData => {
      if (res.status !== 200) throw "Status code " + res.status;
      let pokemonData = {name: name, isLoading: false, isError: false};
      try {
        pokemonData = mapPokemonToFullPokemonData(res.data, name);
      } catch (e) {
        console.log(`${e} Message: ${e}`);
        throw `Error parsing the pokemon ${name} Message: ${e.message}`;
      }
      return pokemonData;
    }
  );
}

export function getCharacteristics(pokemon: string) {
  console.log("calling getCharacteristics");
}
