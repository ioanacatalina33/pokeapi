import React, {useEffect} from "react";
import styled from "styled-components";
import {addFlexProperties, device} from "../../utils/CssUtils";
import Content from "../common/Content";
import FlexDiv from "../common/FlexDiv";
import Subtitle from "../common/Subtitle";
import PokeButton from "./PokeButton";
import {useHistory, useLocation} from "react-router-dom";
import ContentDetails from "./ContentDetails";
import ContentPhotos from "./ContentPhotos";
import {PokemonData} from "../../store/pokemondata/types";
import {RootState} from "../../store";
import {useSelector, useDispatch} from "react-redux";
import {fetchDescription} from "../../store/pokemondata/actions";
import ContentDescription from "./ContentDescription";

function PokeProfile() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Get Pokemon name from the pathname
  const {pathname} = useLocation();
  const pokemonName = pathname.split("/")[2];
  const pokemonTitle = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  // Find PokemonData object in store by pokemon name
  const {pokemonData, isPokeDataLoading, isPokeDataError} = useSelector(
    (state: RootState) => {
      return {
        pokemonData: state.pokemonStore.pokemons[pokemonName],
        isPokeDataLoading: state.pokemonStore.isPokemonsListLoading,
        isPokeDataError: state.pokemonStore.isPokemonsListError,
      };
    }
  );

  const onBackClicked = () => {
    return history.push("/");
  };

  const mapPokemonToContentDetails = (item: PokemonData) => {
    return {
      stats: !item.details
        ? []
        : item.details.stats.map(
            (stat) => `${stat.name} (${stat.baseStat}) - effort: ${stat.effort}`
          ),
      types: item.details ? item.details.types : [],
    };
  };

  /*
    When pokemonData is loaded from the store, check if desciption is set, if not
    make a call to fetch description.
  */
  useEffect(() => {
    if (pokemonData && pokemonData.details && !pokemonData.description) {
      dispatch(
        fetchDescription(
          pokemonData.details.stats.map((stat) => stat.url),
          pokemonData.name
        )
      );
    }
  }, [pokemonData, dispatch]);

  return (
    <Content>
      <PokeButton buttonText="< Back" onClicked={onBackClicked} />

      <Subtitle titleText={pokemonTitle} />
      {pokemonData && !pokemonData.isDetailsLoading && !pokemonData.isDetailsError && (
        <>
          <FlexDiv>
            <FlexElement>
              <ProfileImg
                src={pokemonData.details ? pokemonData.details.profilePic : ""}
                alt={pokemonData.name}
              />
            </FlexElement>
            <FlexElement>
              <ContentDetails {...mapPokemonToContentDetails(pokemonData)} />
            </FlexElement>
          </FlexDiv>
          <ContentDescription {...pokemonData} />
          {pokemonData.details && <ContentPhotos photos={pokemonData.details.sprites} />}
        </>
      )}
      {(isPokeDataLoading || (pokemonData && pokemonData.isDetailsLoading)) && (
        <span>Loading... </span>
      )}
      {(isPokeDataError || (pokemonData && pokemonData.isDetailsError)) && (
        <span>There was a problem loading the Pokemon :( </span>
      )}
    </Content>
  );
}

const FlexElement = styled.div`
  ${addFlexProperties("1 0 55%")}
  margin: 2rem 0rem 1rem 0rem;
  text-align: center;
  @media screen and ${device.sm} {
    margin: 3rem 1rem 3rem 1rem;
    ${addFlexProperties("1 0 0%")}
  }
`;

const ProfileImg = styled.img`
  max-width: 50%;
  max-height: 100%;
  padding: 30px;
  border 1px solid rgb(0,0,0,0.3);
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.5);
`;

export default PokeProfile;
