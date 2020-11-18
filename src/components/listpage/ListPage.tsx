import React from "react";
import Content from "../common/Content";
import SearchBar from "./SearchBar";
import PokemonsList from "./PokemonsList";
import Subtitle from "../common/Subtitle";

const ListPage = () => {
  function onSearchQuery(query: string) {
    //TODO: search in the list
    console.log("TODO: search for query " + query);
  }

  return (
    <Content>
      <Subtitle titleText="1st Generation Pokemons" />
      <SearchBar onSearchQuery={onSearchQuery} />
      <PokemonsList pokemonCards={mockPokemonCards} />
    </Content>
  );
};

export default ListPage;

const mockPokemonCards = [
  {
    id: 1,
    name: "Poke1",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 2,
    name: "Poke2",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 3,
    name: "Poke3",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 4,
    name: "Poke4",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 5,
    name: "Poke5",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 6,
    name: "Poke6",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 7,
    name: "Poke7",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
];
