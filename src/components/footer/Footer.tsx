import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterDiv>
    &#169; Created by IoanaCatalinaE. using{" "}
    <a href="https://pokeapi.co" target="_blank" rel="noreferrer">
      PokeAPI
    </a>
  </FooterDiv>
);

export default Footer;

const FooterDiv = styled.div`
  height: 100%;
  text-align: center;
  font-size: 1rem;
  margin: 1rem;
`;
