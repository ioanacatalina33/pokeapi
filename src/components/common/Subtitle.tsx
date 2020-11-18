import React from "react";
import styled from "styled-components";
import {device} from "../../utils/CssUtils";

const Subtitle = ({titleText}: {titleText: string}) => {
  return <H2>{titleText}</H2>;
};

export default Subtitle;

const H2 = styled.div`
  display: table;
  padding: 0;
  margin: 0 auto;
  font-size: 1.5rem;

  @media screen and ${device.md} {
    padding: 2rem 1rem 0rem 1rem;
  }
`;
