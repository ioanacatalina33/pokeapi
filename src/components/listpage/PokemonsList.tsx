import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {addFlexProperties, device} from "../../utils/cssUtils";
import FlexDiv from "../common/FlexDiv";
import PokemonCard, {PokemonCardData} from "./PokeCard";

const PokemonsList: FunctionComponent<{cards: PokemonCardData[]}> = ({
  cards,
}: {
  cards: PokemonCardData[];
}) => {
  /* 
    In order to keep the flex layout nice, the remaining space is filled on the last row with empty cards
  */
  function generateEmptyCards() {
    const emptyElementsToAdd = 4 - (cards.length % 4);
    const emptyCards = [];
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
