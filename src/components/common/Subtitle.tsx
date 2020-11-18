import React from "react";
import styled from "styled-components";
import {device} from "../../utils/CssUtils";

const Subtitle = ({titleText}: {titleText: string}) => {
  return <H2>{titleText}</H2>;
};

export default Subtitle;

const H2 = styled.h2`
  padding: 0;
  margin: 0 auto;
  font-size: 1.6rem;
  text-align: center;
  @media screen and ${device.md} {
    font-size: 1.5rem;
  }
`;
