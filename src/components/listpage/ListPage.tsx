import React from "react";
import Content from "../common/Content";
import SearchBar from "./SearchBar";
import PokemonsList from "./PokemonsList";
import Subtitle from "../common/Subtitle";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const ListPage = () => {
  const {pokemons, isPokeDataLoading, isPokeDataError} = useSelector(
    (state: RootState) => state.pokemonData
  );

  function onSearchQuery(query: string) {
    //TODO: search in the list
    console.log("TODO: search for query " + query);
  }

  return (
    <Content>
      <Subtitle titleText="1st Generation Pokemons" />
      <SearchBar onSearchQuery={onSearchQuery} />
      <PokemonsList pokemonCards={pokemons} />
      {isPokeDataLoading && <span>Loading...</span>}
      {isPokeDataError && <span>Could not load all pokemons :(</span>}
    </Content>
  );
};

export default ListPage;

const mockPokemonCards = [
  {
    isLoading: false,
    name: "Poke1",
    profilePic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    isLoading: false,
    name: "Poke2",
    profilePic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    isLoading: false,
    name: "Poke3",
    profilePic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    isLoading: false,
    name: "Poke4",
    profilePic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    isLoading: false,
    name: "Poke5",
    profilePic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    isLoading: false,
    name: "Poke6",
    profilePic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    isLoading: false,
    name: "Poke7",
    profilePic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
];
