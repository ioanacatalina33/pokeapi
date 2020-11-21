import React from "react";
import styled from "styled-components";
import {addFlexProperties, device} from "../../utils/CssUtils";
import FlexDiv from "../common/FlexDiv";
import PokemonCard, {PokemonCardData} from "./PokeCard";

const PokemonsList = ({cards}: {cards: PokemonCardData[]}) => {
  /* 
    In order to keep the flex layout nice, the remaining space is filled on the last row with empty cards
  */
  function generateEmptyCards() {
    let emptyElementsToAdd = 4 - (cards.length % 4);
    let emptyCards = [];
    for (let i = 0; i < emptyElementsToAdd; i++) {
      emptyCards.push({id: 0, name: "emptycard" + i, img: ""});
    }
    return emptyCards;
  }

  return (
    <FlexDiv>
      {cards.map((card) => (
        <PokemonCard key={card.name} {...card} />
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
