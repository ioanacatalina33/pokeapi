import React from "react";
import styled from "styled-components";
import {device, colors} from "../../utils/CssUtils";

interface ContentProps {
  children?: React.ReactNode;
}

const Content = (props: ContentProps) => {
  return <ContentDiv>{props.children}</ContentDiv>;
};

export default Content;

const ContentDiv = styled.div`
  max-width: 800px;
  min-height: 600px;
  margin: 0 auto;
  border: 1px solid rgb(0, 0, 0, 0.4);
  border-radius: 0px;
  padding: 2rem 1rem;
  background-color: ${colors.background};
  @media screen and ${device.md} {
    border-radius: 10px;
    padding: 4rem 3rem;
  }
  @media screen and ${device.sm} {
    margin-bottom: 4rem;
  }
`;
