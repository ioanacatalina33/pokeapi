import React, {useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {
  addDefaultTransition,
  addColorTransparency,
  addTransform,
} from "../../utils/CssUtils";

const ImgWithLoading = ({imgSrc}: {imgSrc: string | undefined}) => {
  const [imgLoaded, isImgLoaded] = useState(false);

  const onImgLoad = () => {
    isImgLoaded(true);
  };

  return (
    <RelativeDiv>
      <PokePlaceholder loaded={imgLoaded} src="./img/profilePlaceholder.png" alt={""} />
      <PokeImg loaded={imgLoaded} src={imgSrc} onLoad={onImgLoad} />
    </RelativeDiv>
  );
};

const loadingSlide = keyframes`
0%{
  background-position: -400px 0
}
100%{
  background-position: 400px 0
}
`;

const loadingSlideRule = css`
  ${loadingSlide} 3s linear infinite;
`;

const RelativeDiv = styled.div`
  position: relative;
`;

const PokeImg = styled.img<{loaded: boolean}>`
  ${addDefaultTransition()}
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  ${addTransform("translate(-50%, -50%)")};
  height: auto;
  margin: 0;
  opacity: ${(prop) => (prop.loaded ? "1" : "0")};
`;

const PokePlaceholder = styled.img<{loaded: boolean}>`
  ${addDefaultTransition()}
  width: 100%;
  vertical-align: middle;
  opacity: ${(prop) => (prop.loaded ? "0" : "1")};
  background: linear-gradient(
    to right,
    ${addColorTransparency("#efefef", 30)} 10%,
    #cfcfcf 40%,
    ${addColorTransparency("#efefef", 30)} 70%
  );
  background-size: 400px 640px;
  -webkit-animation: ${loadingSlideRule};
  -moz-animation: ${loadingSlideRule};
  -o-animation: ${loadingSlideRule};
  animation: ${loadingSlideRule};
`;

export default ImgWithLoading;
