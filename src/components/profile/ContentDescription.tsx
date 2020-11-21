import React from "react";
import styled from "styled-components";
import CategoryTitle from "../common/CategoryTitle";

interface ContentDescriptionProps {
  description?: string;
  isDescriptionLoading: boolean;
  isDescriptionError: boolean;
}

const ContentDescription = ({
  description,
  isDescriptionLoading,
  isDescriptionError,
}: ContentDescriptionProps) => {
  return (
    <ContentDescriptionDiv>
      <CategoryTitle titleText={"Description"} />
      {isDescriptionLoading && <span>Loading description...</span>}
      {isDescriptionError && <span>Error loading description</span>}
      {description && !isDescriptionError && !isDescriptionError && (
        <div style={{textAlign: "left"}}>{description}</div>
      )}
    </ContentDescriptionDiv>
  );
};

export default ContentDescription;

const ContentDescriptionDiv = styled.div`
  height: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
