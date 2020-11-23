import React, {FunctionComponent} from "react";
import styled from "styled-components";
import CategoryTitle from "../common/CategoryTitle";
import LoadingContent from "../common/LoadingContent";

interface ContentDescriptionProps {
  description?: string;
  isDescriptionLoading: boolean;
  isDescriptionError: boolean;
}

const ContentDescription: FunctionComponent<ContentDescriptionProps> = ({
  description,
  isDescriptionLoading,
  isDescriptionError,
}: ContentDescriptionProps) => {
  return (
    <ContentDescriptionDiv>
      <CategoryTitle titleText={"Description"} />
      <LoadingContent
        isLoading={isDescriptionLoading}
        isError={isDescriptionError}
        errorText="Error loading description"
      >
        <div style={{textAlign: "left"}}>{description}</div>
      </LoadingContent>
    </ContentDescriptionDiv>
  );
};

export default React.memo(ContentDescription);

const ContentDescriptionDiv = styled.div`
  height: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
