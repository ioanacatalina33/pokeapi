import React, {FC, PropsWithChildren, ReactNode} from "react";
import styled from "styled-components";
import withFadeIn from "./withFadeIn";
import FadeInImage from "./FadeInImage";
import LoadingPokeBalls from "./LoadingPokeBalls";

interface ContentProps {
  children: PropsWithChildren<ReactNode>;
  isLoading: boolean;
  isError: boolean;
  errorText: string;
}

/*
  Shows children components only when isLoading and isError are false.
  Otherwise, shows different indicators that content is either loading or
  there has been an error.
*/
const LoadingContent: FC<ContentProps> = (props: ContentProps) => {
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
