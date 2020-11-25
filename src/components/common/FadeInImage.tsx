import React, {FC, useState} from "react";
import styled from "styled-components";
import {addDefaultTransition} from "../../utils/cssUtils";

/*
  Waits till image loads and then makes a fadein transition from opacity 0 to 1
*/
const FadeInImage: FC<any> = (props: any) => {
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
