import React, {useEffect, useState} from "react";
import Content from "../common/Content";
import SearchBar from "./SearchBar";
import PokemonsList from "./PokemonsList";
import Subtitle from "../common/Subtitle";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import useYScroll from "../../utils/useYScroll";

const ListPage = () => {
  const [cardsLimit, setCardsLimit] = useState(20);
  const currentScrollY = useYScroll();

  const {pokemons, isPokeDataLoading, isPokeDataError} = useSelector(
    (state: RootState) => state.pokemonData
  );

  function onSearchQuery(query: string) {
    //TODO: search in the list
    console.log("TODO: search for query " + query);
  }

  useEffect(() => {
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 200) {
      setCardsLimit((prevState) => prevState + 20);
    }
  }, [currentScrollY]);

  function getCardsShown(limit: number) {
    return Object.values(pokemons).slice(0, limit);
  }

  return (
    <Content>
      <Subtitle titleText="1st Generation Pokemons" />
      <SearchBar onSearchQuery={onSearchQuery} />
      <PokemonsList pokemonCards={getCardsShown(cardsLimit)} />
      {isPokeDataLoading && <span>Loading...</span>}
      {isPokeDataError && <span>Could not load all pokemons :(</span>}
    </Content>
  );
};

export default ListPage;
