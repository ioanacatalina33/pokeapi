import React from "react";
import styled from "styled-components";
import LoadingAnimation from "./LoadingAnimation";

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
          {props.isLoading && <LoadingAnimation />}
          {props.isError && (
            <div>
              {props.errorText}
              <br />
              <br />
              <img src="/img/imgError.png" />
            </div>
          )}
        </ContentDiv>
      ) : (
        props.children
      )}
    </>
  );
};
export default LoadingContent;

const ContentDiv = styled.div`
  text-align: center;
  margin: 3rem 1rem 2rem 1rem;
`;
