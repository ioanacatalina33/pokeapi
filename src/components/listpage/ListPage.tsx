import React, {useEffect} from "react";
import Content from "../common/Content";
import SearchBar from "./SearchBar";
import PokemonsList from "./PokemonsList";
import TitleText from "../common/TitleText";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {INCREMENT_CARDS_LIMIT, RESET_CARDS_LIMIT} from "../../store/appstates/types";
import {setSearchQuery} from "../../store/appstates/actions";
import {PokemonCardData} from "./PokeCard";
import LoadingContent from "../common/LoadingContent";

const ListPage = () => {
  const dispatch = useDispatch();
  const {
    pokemonsFilteredList,
    isPokemonsListLoading,
    isPokemonsListError,
    totalPokemonsNr,
    displayLimit,
  } = useSelector((state: RootState) => {
    return {
      pokemonsFilteredList: Object.values(state.pokemonStore.pokemons)
        .filter((pokemon) => pokemon.name.includes(state.appStates.query))
        .slice(0, state.appStates.cardsLimit),
      ...state.pokemonStore,
      totalPokemonsNr: Object.keys(state.pokemonStore.pokemons).length,
      displayLimit: state.appStates.cardsLimit,
    };
  });

  // Detect scroll events to increase the cards display limit
  useEffect(() => {
    window.addEventListener("scroll", checkIncrementCardsLimit);
    return () => {
      window.removeEventListener("scroll", checkIncrementCardsLimit);
    };
  });

  // In case displayLimit reachest the number of pokemons in the original list
  // the scroll event can be removed
  function checkIncrementCardsLimit() {
    if (displayLimit > totalPokemonsNr)
      window.removeEventListener("scroll", checkIncrementCardsLimit);
    else if (window.innerHeight + scrollY >= document.body.offsetHeight - 200) {
      dispatch({type: INCREMENT_CARDS_LIMIT});
    }
  }

  // When leaving the page the cards display limit is reset
  useEffect(() => {
    return () => {
      dispatch({type: RESET_CARDS_LIMIT});
    };
  }, []);

  // Maps PokemonData to PokemonDataCard list
  function getCardsShown(): PokemonCardData[] {
    return pokemonsFilteredList.map((pokemon) => {
      return {
        name: pokemon.name,
        profilePic: pokemon.details ? pokemon.details.profilePic : "",
        isLoading: pokemon.isDetailsLoading,
      };
    });
  }

  function onSearchQuery(query: string) {
    dispatch(setSearchQuery(query));
  }

  return (
    <Content>
      <TitleText text="1st Generation Pokemons" />
      <SearchBar onSearchQuery={onSearchQuery} />
      <LoadingContent
        isLoading={isPokemonsListLoading}
        isError={isPokemonsListError}
        errorText="Could not load pokemons"
      >
        <PokemonsList cards={getCardsShown()} />
      </LoadingContent>
    </Content>
  );
};

export default ListPage;
