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
import ImgWithLoading from "../common/ImgWithLoading";

export interface PokemonCardData {
  name: string;
  profilePic?: string;
  isLoading: boolean;
}

const PokemonCard = (card: PokemonCardData) => {
  return (
    <CardDiv>
      <Link
        style={{textDecoration: "none", color: colors.colorText}}
        to={PATH_PROFILE + "/" + card.name}
      >
        <ImgWithLoading imgSrc={card.profilePic} />
        <CardName>{card.name}</CardName>
      </Link>
    </CardDiv>
  );
};

export default PokemonCard;

const CardDiv = styled.div`
  ${addFlexProperties("1 0 41%")}
  margin: 10px;
  @media screen and ${device.sm} {
    ${addFlexProperties("1 0 21%")}
  }
  box-shadow: 0px 0px 0px ${addColorTransparency(colors.secondary, 40)};
  border: 1px solid rgb(200, 200, 200, 1);
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 5px;
  text-align: center;
  &:hover {
    cursor: pointer;
    box-shadow: -1px 1px 15px ${addColorTransparency(colors.secondary, 40)};
    ${addTransform("scale(1.08)")}
  }
  ${addDefaultTransition()}
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
