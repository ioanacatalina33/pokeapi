import React from "react";
import styled from "styled-components";
import {PokemonPreview} from "../../model";
import {addFlexProperties, device} from "../../utils/CssUtils";
import FlexDiv from "../common/FlexDiv";
import PokemonCard from "./PokeCard";

interface PokemonsListProps {
  pokemonCards: PokemonPreview[];
}

const PokemonsList = ({pokemonCards}: PokemonsListProps) => {
  /* In order to keep the flex layout nice, the remaining space is filled on the last row with empty cards*/
  function generateEmptyCards() {
    let emptyElementsToAdd = 4 - (pokemonCards.length % 4);
    let emptyCards = [];
    for (let i = 0; i < emptyElementsToAdd; i++) {
      emptyCards.push({id: 0, name: "emptycard" + i, img: ""});
    }
    return emptyCards;
  }

  return (
    <FlexDiv>
      {pokemonCards.map((card) => (
        <PokemonCard key={card.id} card={card} />
      ))}
      {generateEmptyCards().map((card) => (
        <FlexEmptyElement key={card.name} />
      ))}
    </FlexDiv>
  );
};

export default PokemonsList;

const FlexEmptyElement = styled.div`
  ${addFlexProperties("1 0 41%")}
  margin: 10px;
  @media screen and ${device.sm} {
    ${addFlexProperties("1 0 21%")}
  }
`;
