import React from "react";
import styled, {css, keyframes} from "styled-components";

const withFadeIn = (component: React.ReactNode) => {
  return <FadeInDiv>{component}</FadeInDiv>;
};
export default withFadeIn;

const fadeIn = keyframes`
from { opacity: 0; }
    to   { opacity: 1; }
`;

const fadeInRule = css`
  ${fadeIn} 0.3s linear;
  background-color: "green";
`;

const FadeInDiv = styled.div`
  -webkit-animation: ${fadeInRule} 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${fadeInRule} 2s; /* Firefox < 16 */
  -ms-animation: ${fadeInRule} 2s; /* Internet Explorer */
  -o-animation: ${fadeInRule} 2s; /* Opera < 12.1 */
  animation: ${fadeInRule} 2s;
`;
