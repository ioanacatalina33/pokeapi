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
  function buttonClicked(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    onClicked();
  }

  return <Button onClick={buttonClicked}>{buttonText}</Button>;
};

const Button = styled.button`
  font-family: "Pokemon Solid", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto";
  font-size: 2rem;
  letter-spacing: 5px;
  border: none;
  background: transparent;
  text-decoration: none;
  outline: none;
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
