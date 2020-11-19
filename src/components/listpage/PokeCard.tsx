import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {PATH_PROFILE} from "../../utils/Constants";
import {
  addColorTransparency,
  addDefaultTransition,
  addFlexProperties,
  addTransform,
  colors,
  device,
} from "../../utils/CssUtils";

interface PokemonCardProps {
  card: {name: string; profilePic?: string; isLoading: boolean};
}

const PokemonCard = ({card}: PokemonCardProps) => {
  return (
    <CardDiv>
      <Link
        style={{textDecoration: "none", color: colors.colorText}}
        to={PATH_PROFILE + "/" + card.name}
      >
        <PokePlaceholder src="./img/profilePlaceholder.png" alt={""} />
        <PokeImg src={card.profilePic} alt={card.name} />

        <CardName>{card.name}</CardName>
      </Link>
    </CardDiv>
  );
};

export default PokemonCard;

const CardDiv = styled.div`
  position: relative;
  ${addFlexProperties("1 0 41%")}
  margin: 10px;
  @media screen and ${device.sm} {
    ${addFlexProperties("1 0 21%")}
  }
  box-shadow: 0px 0px 0px ${addColorTransparency(colors.secondary, 40)};
  background-color: rgb(255, 255, 255, 0.5);
  border: 1px solid rgb(200, 200, 200, 1);
  border-radius: 5px;
  text-align: center;
  &:hover {
    cursor: pointer;
    box-shadow: -1px 1px 15px ${addColorTransparency(colors.secondary, 40)};
    ${addTransform("scale(1.08)")}
  }
  ${addDefaultTransition()}
`;

const PokeImg = styled.img`
  ${addDefaultTransition()}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin: 0;
`;

const PokePlaceholder = styled.img`
  ${addDefaultTransition()}
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  background-color: ${colors.backgroundLight};
  background-color: green;
`;

const CardName = styled.div`
  ${addDefaultTransition()}
  margin: 0 auto;
  padding: 4px;
  background-color: ${addColorTransparency(colors.secondary, 40)};
  ${CardDiv}:hover & {
    background-color: ${addColorTransparency(colors.primary, 90)};
  }
`;
