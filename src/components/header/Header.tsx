import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {device, colors} from "../../utils/CssUtils";

const Header = () => {
  return (
    <Title>
      <TitleText>
        <StyledLink to="/">PokemonAPI</StyledLink>
      </TitleText>
      <PikachuImg src="/img/pikachu.png" />
    </Title>
  );
};

export default Header;

const Title = styled.div`
  display: table;
  padding: 0;
  margin: 0 auto;
  @media screen and ${device.md} {
    padding: 2rem 1rem 0rem 1rem;
  }
`;

const PikachuImg = styled.img`
  max-width: 150px;
  max-height: 150px;
  padding: 0rem 0rem 0rem 2rem;
  margin: 0;
  position: relative;
  margin-bottom: -1.5rem;
  z-index: 10;

  @media screen and ${device.sm} {
    max-width: 200px;
    max-height: 200px;
  }
  @media screen and ${device.md} {
    max-width: 300px;
    max-height: 300px;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  -webkit-text-stroke-color: ${colors.secondary};
  -webkit-text-stroke-width: 1px;
  text-decoration: none;
`;

const TitleText = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-family: "Pokemon Solid", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", sans-serif;
  letter-spacing: 5px;
  color: ${colors.primary};
  -webkit-text-stroke-color: ${colors.secondary};
  -webkit-text-stroke-width: 1px;
  text-shadow: -4px 4px 0px ${colors.secondary};
  display: block;
  vertical-align: middle;
  padding-bottom: 0rem;
  @media only screen and ${device.sm} {
    font-size: 3rem;
    display: table-cell;
  }
  @media only screen and ${device.md} {
    font-size: 4rem;
    padding-bottom: 3rem;
  }
`;
