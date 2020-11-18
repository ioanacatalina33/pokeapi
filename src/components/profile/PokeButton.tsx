import React from "react";
import styled from "styled-components";
import {addDefaultTransition, addTransform, colors} from "../../utils/CssUtils";

const PokeButton = ({
  onClicked,
  buttonText,
}: {
  onClicked: () => void;
  buttonText: string;
}) => {
  return <Button onClick={onClicked}>{buttonText}</Button>;
};

const Button = styled.span`
  font-family: "Pokemon Solid", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto";
  font-size: 2rem;
  letter-spacing: 5px;
  color: ${colors.primary};
  -webkit-text-stroke-color: ${colors.secondary};
  -webkit-text-stroke-width: 1px;
  text-shadow: -4px 4px 0px ${colors.secondary};
  &:hover {
    ${addTransform("scale(1.1)")}
    cursor: pointer;
    color: ${colors.primary};
  }
  ${addDefaultTransition()}
`;

export default PokeButton;
