import React, {useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {
  addDefaultTransition,
  addColorTransparency,
  addTransform,
} from "../../utils/cssUtils";

const ImgWithPlaceholder = ({
  imgSrc,
  width = "100%",
}: {
  imgSrc: string | undefined;
  width?: string;
}) => {
  const [imgLoaded, isImgLoaded] = useState(false);

  const onImgLoad = () => {
    isImgLoaded(true);
  };

  return (
    <RelativeDiv>
      <PokePlaceholder loaded={imgLoaded} src="./img/profilePlaceholder.png" />
      <PokeImg loaded={imgLoaded} src={imgSrc} onLoad={onImgLoad} width={width} />
    </RelativeDiv>
  );
};

export default ImgWithPlaceholder;

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

const PokeImg = styled.img<{loaded: boolean; width: string}>`
  ${addDefaultTransition()}
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${(prop) => prop.width};
  ${addTransform("translate(-50%, -50%)")};
  height: auto;
  margin: 0;
  opacity: ${(prop) => (prop.loaded ? "1" : "0")};
`;

const PokePlaceholder = styled.img<{loaded: boolean}>`
  ${addDefaultTransition()}
  width: 100%;
  height: 100%;
  min-height: 150px;
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
