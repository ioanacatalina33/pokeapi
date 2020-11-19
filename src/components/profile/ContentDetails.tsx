import React from "react";
import styled from "styled-components";
import {colors} from "../../utils/CssUtils";
import CategoryTitle from "../common/CategoryTitle";

interface ContentDetailsProps {
  isLoading: boolean;
  details?: {
    stats: string[];
    types: string[];
    description?: string;
    isDescriptionLoading: boolean;
  };
}

const ContentDetails = ({isLoading, details}: ContentDetailsProps) => {
  return (
    <ContentDetailsDiv>
      {isLoading && <span>Data is loading</span>}
      {!isLoading && details && (
        <>
          <CategoryTitle titleText={"Characteristics"} />
          {details.description ? <span>{details.description}</span> : "Loading..."}
          <CategoryTitle titleText={"Types"} />
          <div>
            {details.types.map((type) => (
              <StyledBadge key={type}>{type}</StyledBadge>
            ))}
          </div>
          <CategoryTitle titleText={"Stats"} />
          <ul style={{margin: 0}}>
            {details.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>{" "}
        </>
      )}
    </ContentDetailsDiv>
  );
};

export default ContentDetails;

const ContentDetailsDiv = styled.div`
  height: 100%;
  text-align: left;
`;

const StyledBadge = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  display: inline-block;
  padding: 0rem 1rem 0.2rem 1rem;
  background-color: ${colors.secondary};
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0.5rem 0.3rem 0.5rem 0.3rem;
`;
