import React, {useCallback, useEffect} from "react";
import Content from "../common/Content";
import SearchBar from "./SearchBar";
import PokemonsList from "./PokemonsList";
import Subtitle from "../common/Subtitle";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {INCREMENT_CARDS_LIMIT, RESET_CARDS_LIMIT} from "../../store/appstates/types";
import {setSearchQuery} from "../../store/appstates/actions";
import {PokemonCardData} from "./PokeCard";

const ListPage = () => {
  const dispatch = useDispatch();
  const {pokemonsFilteredList, isPokemonsListLoading, isPokemonsListError} = useSelector(
    (state: RootState) => {
      return {
        pokemonsFilteredList: Object.values(state.pokemonStore.pokemons)
          .filter((pokemon) => pokemon.name.includes(state.appStates.query))
          .slice(0, state.appStates.cardsLimit),
        ...state.pokemonStore,
      };
    }
  );

  function onSearchQuery(query: string) {
    dispatch(setSearchQuery(query));
  }

  function checkIncrementCardsLimit() {
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 200) {
      dispatch({type: INCREMENT_CARDS_LIMIT});
    }
  }

  // Detect scroll events to increase the cards display limit
  useEffect(() => {
    window.addEventListener("scroll", checkIncrementCardsLimit);
    return () => {
      window.removeEventListener("scroll", checkIncrementCardsLimit);
    };
  });

  // When leaving the page the cards display limit is reset
  useEffect(() => {
    return () => {
      resetCardsLimit();
    };
  }, []);

  function resetCardsLimit() {
    dispatch({type: RESET_CARDS_LIMIT});
  }

  const getCardsShown = useCallback((): PokemonCardData[] => {
    return pokemonsFilteredList.map((pokemon) => {
      return {
        name: pokemon.name,
        profilePic: pokemon.details ? pokemon.details.profilePic : "",
        isLoading: pokemon.isDetailsLoading,
      };
    });
  }, [pokemonsFilteredList]);

  return (
    <Content>
      <Subtitle titleText="1st Generation Pokemons" />
      <SearchBar onSearchQuery={onSearchQuery} />
      {!isPokemonsListLoading && !isPokemonsListError && (
        <PokemonsList cards={getCardsShown()} />
      )}
      {isPokemonsListLoading && <span>Loading...</span>}
      {isPokemonsListError && <span>Could not load pokemons :(</span>}
    </Content>
  );
};

export default ListPage;
