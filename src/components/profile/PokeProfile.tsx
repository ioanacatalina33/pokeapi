import React, {useEffect} from "react";
import styled from "styled-components";
import {addFlexProperties, alignItems, device} from "../../utils/CssUtils";
import Content from "../common/Content";
import FlexDiv from "../common/FlexDiv";
import Subtitle from "../common/Subtitle";
import PokeButton from "./PokeButton";
import {useHistory, useLocation} from "react-router-dom";
import ContentDetails from "./ContentDetails";
import ContentPhotos from "./ContentPhotos";
import {PokemonData} from "../../store/pokemondata/types";
import {RootState} from "../../store";
import {useSelector} from "react-redux";

function PokeProfile() {
  const history = useHistory();

  // Get Pokemon name from the pathname
  const {pathname} = useLocation();
  let pokemonName = pathname.split("/")[2];
  pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  // Find PokemonData object in store by pokemon name
  const pokemonData: PokemonData | undefined = useSelector((state: RootState) =>
    state.pokemonData.pokemons.find((pokemon) => pokemon.name === pokemonName)
  );

  const onBackClicked = () => {
    history.goBack();
  };

  const mapPokemonFullToContentDetails = (item: PokemonData) => {
    return {
      isLoading: item.isLoading,
      details: item.details,
    };
  };

  return (
    <Content>
      <PokeButton buttonText="< Back" onClicked={onBackClicked} />

      <Subtitle titleText={pokemonName} />
      {pokemonData && pokemonData.details && (
        <>
          <FlexDiv>
            <FlexElement>
              <ProfileImg src={pokemonData.profilePic} alt={pokemonData.name} />
            </FlexElement>
            <FlexElement>
              <ContentDetails {...mapPokemonFullToContentDetails(pokemonData)} />
            </FlexElement>
          </FlexDiv>
          <ContentPhotos photos={pokemonData.details.sprites} />
        </>
      )}
      {pokemonData && pokemonData.isLoading && <span>Loading... </span>}
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

const pokemonMock = {
  id: "4",
  name: "Ivysaur",
  isLoading: false,
  profilePic:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
  details: {
    sprites: {
      back_female: undefined,
      back_shiny_female: undefined,
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      front_female: undefined,
      front_shiny_female: undefined,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
    },
    stats: ["hp", "attack", "defense", "special-attack", "special-defense", "speed"],
    types: ["grass", "poison"],
    description: "Some descriptions about Ivysaur",
    isDescriptionLoading: false,
  },
};

export default PokeProfile;
