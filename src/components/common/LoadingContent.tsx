import React from "react";
import styled from "styled-components";
import withFadeIn from "./withFadeIn";
import FadeInImage from "./FadeInImage";
import LoadingPokeBalls from "./LoadingPokeBalls";

interface ContentProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: boolean;
  errorText: string;
}

const LoadingContent = (props: ContentProps) => {
  return (
    <>
      {props.isLoading || props.isError ? (
        <ContentDiv>
          {props.isLoading && <LoadingPokeBalls />}
          {props.isError && (
            <div>
              {props.errorText}
              <br />
              <br />
              <FadeInImage src="/img/imgError.png" />
            </div>
          )}
        </ContentDiv>
      ) : (
        withFadeIn(props.children)
      )}
    </>
  );
};
export default LoadingContent;

const ContentDiv = styled.div`
  text-align: center;
  margin: 3rem 1rem 2rem 1rem;
`;
