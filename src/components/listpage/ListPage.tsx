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
      <PokemonsList pokemonCards={Object.values(pokemons)} />
      {isPokeDataLoading && <span>Loading...</span>}
      {isPokeDataError && <span>Could not load all pokemons :(</span>}
    </Content>
  );
};

export default ListPage;
