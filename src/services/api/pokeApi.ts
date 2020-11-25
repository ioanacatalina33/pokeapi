import axios from "axios";
const endpoint = "https://pokeapi.co/api/v2";
/* eslint-disable  @typescript-eslint/no-explicit-any */

export function getPokemons(offset: number, limit: number): Promise<any> {
  return axios.get(`${endpoint}/pokemon?offset=${offset}&limit=${limit}`);
}

export function getPokemon(pokemonName: string): Promise<any> {
  return axios.get(`${endpoint}/pokemon/${pokemonName}`);
}

export function getFromURL(url: string): Promise<any> {
  return axios.get(`${url}`);
}
