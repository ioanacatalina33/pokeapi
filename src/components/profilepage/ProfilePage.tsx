import React, {FunctionComponent, useEffect} from "react";
import styled from "styled-components";
import {addFlexProperties, device} from "../../utils/cssUtils";
import Content from "../common/Content";
import FlexDiv from "../common/FlexDiv";
import TitleText from "../common/TitleText";
import PokeButton from "./PokeButton";
import {useHistory, useLocation} from "react-router-dom";
import ContentDetails from "./ContentDetails";
import ContentPhotos from "./ContentPhotos";
import {PokemonData} from "../../store/pokemondata/types";
import {RootState} from "../../store";
import {useSelector, useDispatch} from "react-redux";
import {fetchDescription, fetchOnePokemonDetails} from "../../store/pokemondata/actions";
import ContentDescription from "./ContentDescription";
import LoadingContent from "../common/LoadingContent";
import FadeInImage from "../common/FadeInImage";

const PokeProfile: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(fetchOnePokemonDetails(pokemonName));
    dispatch(fetchDescription(pokemonName));
  }, []);

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

  return (
    <Content>
      <PokeButton buttonText="< Back" onClicked={onBackClicked} />

      {pokemonData && (
        <LoadingContent
          isLoading={isPokeDataLoading || pokemonData.isDetailsLoading}
          isError={isPokeDataError || pokemonData.isDetailsError}
          errorText="Could not load the Pokemon"
        >
          <TitleText text={pokemonTitle} />
          <FlexDiv>
            <FlexElement>
              <FadeInImage
                src={pokemonData.details ? pokemonData.details.profilePic : ""}
                style={{maxWidth: "100%"}}
              />
            </FlexElement>
            <FlexElement>
              <ContentDetails {...mapPokemonToContentDetails(pokemonData)} />
            </FlexElement>
          </FlexDiv>
          <ContentDescription {...pokemonData} />
          {pokemonData.details && <ContentPhotos photos={pokemonData.details.sprites} />}
        </LoadingContent>
      )}
    </Content>
  );
};

const FlexElement = styled.div`
  ${addFlexProperties("1 0 51%")}
  margin: 2rem 0rem 1rem 0rem;
  text-align: center;
  @media screen and ${device.sm} {
    margin: 3rem 1rem 3rem 1rem;
    ${addFlexProperties("1 0 0")}
  }
`;

export default PokeProfile;
