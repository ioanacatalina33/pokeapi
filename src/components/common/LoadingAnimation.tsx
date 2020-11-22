import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {addDefaultTransition, addTransform} from "../../utils/cssUtils";

const LoadingAnimation = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter((c) => (c == 3 ? 0 : c + 1));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <ContentDiv>
      <AnimationBall src="/img/imgLoading.png" isLarge={counter == 1} />
      <AnimationBall src="/img/imgLoading.png" isLarge={counter == 2} />
      <AnimationBall src="/img/imgLoading.png" isLarge={counter == 3} />
    </ContentDiv>
  );
};
export default LoadingAnimation;

const ContentDiv = styled.div`
  text-align: center;
  margin: 1rem;
`;

const AnimationBall = styled.img<{isLarge: boolean}>`
  width: 30px;
  margin: 0.3rem;
  ${(prop) => prop.isLarge && addTransform("scale(1.3)")}
  ${addDefaultTransition()}
`;
