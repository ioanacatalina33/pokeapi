import React, {FunctionComponent, useCallback, useEffect} from "react";
import Content from "../common/Content";
import SearchBar from "./SearchBar";
import PokemonsList from "./PokemonsList";
import TitleText from "../common/TitleText";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {
  INCREMENT_CARDS_LIMIT,
  DEFAULT_LIMIT,
  RESET_CARDS_LIMIT,
  LIMIT_INCREMENT,
} from "../../store/appstates/types";
import {setSearchQuery} from "../../store/appstates/actions";
import {PokemonCardData} from "./PokeCard";
import LoadingContent from "../common/LoadingContent";
import {getDetails, fetchDetailsWithOffset} from "../../store/pokemondata/actions";

const ListPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    pokemonsFilteredList,
    pokemonsFullList,
    isPokemonsListLoading,
    isPokemonsListError,
    displayLimit,
    query,
  } = useSelector((state: RootState) => {
    return {
      pokemonsFilteredList: Object.values(state.pokemonStore.pokemons)
        .filter((pokemon) => pokemon.name.includes(state.appStates.query))
        .slice(0, state.appStates.cardsLimit),
      ...state.pokemonStore,
      pokemonsFullList: Object.values(state.pokemonStore.pokemons),
      displayLimit: state.appStates.cardsLimit,
      query: state.appStates.query,
    };
  });

  useEffect(() => {
    dispatch(fetchDetailsWithOffset(0, DEFAULT_LIMIT));
    return () => {
      dispatch({type: RESET_CARDS_LIMIT});
      dispatch(setSearchQuery(""));
    };
  }, []);

  /*
    In case displayLimit reachest the maximu number of pokemons the event can be removed. 
    Otherwise dispatch action to increment the limit and call to fetch the pokemons details. 
    In case there is a search query, fetch the details from the filtered list. 

    Note: This logic of fetching pokemon details with limit and offset and updating the cards limit
    could have also been done in an action in saga.
  */
  const checkIncrementCardsLimit = useCallback(() => {
    if (displayLimit > pokemonsFullList.length && pokemonsFullList.length !== 0)
      window.removeEventListener("scroll", checkIncrementCardsLimit);
    else if (
      typeof window !== undefined &&
      window.innerHeight + scrollY >= document.body.offsetHeight - 200
    ) {
      dispatch({type: INCREMENT_CARDS_LIMIT});
      if (!query || query == "") {
        dispatch(
          fetchDetailsWithOffset(
            pokemonsFilteredList.length,
            pokemonsFilteredList.length + LIMIT_INCREMENT
          )
        );
      } else {
        const filteredListToFetch = pokemonsFullList
          .filter((p) => p.name.includes(query))
          .slice(
            pokemonsFilteredList.length,
            pokemonsFilteredList.length + LIMIT_INCREMENT
          );
        dispatch(getDetails(filteredListToFetch));
      }
    }
  }, [displayLimit, pokemonsFullList, pokemonsFilteredList.length, dispatch, query]);

  /* 
    Detect scroll events to increase the cards display limit
  */
  useEffect(() => {
    window.addEventListener("scroll", checkIncrementCardsLimit);
    return () => {
      window.removeEventListener("scroll", checkIncrementCardsLimit);
    };
  }, [checkIncrementCardsLimit]);

  /*
    Maps PokemonData to PokemonDataCard list
  */
  function getCardsShown(): PokemonCardData[] {
    return pokemonsFilteredList.map((pokemon) => {
      return {
        name: pokemon.name,
        profilePic: pokemon.details ? pokemon.details.profilePic : "",
        isLoading: pokemon.isDetailsLoading,
      };
    });
  }

  /* 
    Dispatch action to update the query from store
    Fetch details for the first pokemons in the filtered list.
  */
  function onSearchQuery(query: string) {
    dispatch({type: RESET_CARDS_LIMIT});
    dispatch(setSearchQuery(query.toLowerCase()));
    if (query !== "") {
      dispatch(
        getDetails(
          pokemonsFullList
            .filter((poke) => poke.name.includes(query.toLowerCase()))
            .slice(0, DEFAULT_LIMIT)
        )
      );
    }
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
