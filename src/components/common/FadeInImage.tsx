import React, {useState} from "react";
import styled from "styled-components";
import {addDefaultTransition} from "../../utils/cssUtils";

const FadeInImage = (props: any) => {
  const [imgLoaded, isImgLoaded] = useState(false);

  const onImgLoad = () => {
    isImgLoaded(true);
  };

  return <StyledImg loaded={imgLoaded} onLoad={onImgLoad} {...props} />;
};

export default FadeInImage;

const StyledImg = styled.img<{loaded: boolean}>`
  ${addDefaultTransition()}
  opacity: ${(prop) => (prop.loaded ? "1" : "0")};
`;
