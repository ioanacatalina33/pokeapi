import axios from "axios";
const endpoint = "https://pokeapi.co/api/v2";

export function getPokemons(offset: number, limit: number) {
  return axios.get(`${endpoint}/pokemon?offset=${offset}&limit=${limit}`);
}

export function getPokemon(pokemonName: string) {
  return axios.get(`${endpoint}/pokemon/${pokemonName}`);
}

export function getFromURL(url: string) {
  return axios.get(`${url}`);
}
