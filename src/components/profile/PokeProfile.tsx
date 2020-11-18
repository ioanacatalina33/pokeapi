import React, {useEffect} from "react";
import styled from "styled-components";
import {addFlexProperties, device} from "../../utils/CssUtils";
import Content from "../common/Content";
import FlexDiv from "../common/FlexDiv";
import Subtitle from "../common/Subtitle";
import PokeButton from "./PokeButton";
import {useHistory} from "react-router-dom";
import ContentDetails from "./ContentDetails";
import ContentPhotos from "./ContentPhotos";
import {PokemonFull} from "../../model";

function PokeProfile() {
  let history = useHistory();

  const onBackClicked = () => {
    history.goBack();
  };

  const mapPokemonFullToContentDetails = (item: PokemonFull) => {
    return {description: item.description, stats: item.stats, types: item.types};
  };

  return (
    <Content>
      <PokeButton buttonText="< Back" onClicked={onBackClicked} />
      <Subtitle titleText={pokemonMock.name} />
      <FlexDiv>
        <FlexElement>
          <ProfileImg src={pokemonMock.sprites.front_default} alt={pokemonMock.name} />
        </FlexElement>
        <FlexElement>
          <ContentDetails {...mapPokemonFullToContentDetails(pokemonMock)} />
        </FlexElement>
      </FlexDiv>
      <ContentPhotos photos={pokemonMock.sprites} />
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
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
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
};

export default PokeProfile;
