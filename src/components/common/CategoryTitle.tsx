import React, {FC} from "react";
import styled from "styled-components";

const CategoryTitle: FC<{titleText: string}> = ({titleText}: {titleText: string}) => {
  return <H3Category>{titleText}</H3Category>;
};

export default CategoryTitle;

const H3Category = styled.h3`
  padding: 0;
  margin: 0.8rem 0rem 0.8rem 0rem;
  font-size: 1.2rem;
`;
