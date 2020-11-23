import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "styled-components";
import {
  device,
  colors,
  addDefaultTransition,
  addColorTransparency,
} from "../../utils/cssUtils";
import FlexDiv from "../common/FlexDiv";

interface SearchBarProps {
  onSearchQuery: (query: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  onSearchQuery,
}: SearchBarProps) => {
  const [keyPressedTimeout, setKeyPressedTimeout] = useState<number>(0);

  useEffect(() => {
    if (keyPressedTimeout) return () => clearTimeout(keyPressedTimeout);
  }, [keyPressedTimeout]);

  /*
    When value of the search input changes (user presses a key) a timeout is set for each key pressed
    to detect when user stops from typing. Only when user makes a pause of more than 300ms
    the callback onSearchQuery is triggered. 
  */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (keyPressedTimeout) clearTimeout(keyPressedTimeout);
    setKeyPressedTimeout(
      setTimeout(() => {
        onSearchQuery(newValue);
      }, 300)
    );
  };

  return (
    <FlexDiv>
      <StyledImg src="./img/imgLoading.png" />
      <StyledInput type="search" placeholder="Search for pokemons" onChange={onChange} />
    </FlexDiv>
  );
};

export default SearchBar;

const StyledImg = styled.img`
  display: none;
  width: 35px;
  @media screen and ${device.sm} {
    display: block;
  }
`;

const StyledInput = styled.input`
  ${addDefaultTransition()};
  width: 100%;
  padding: 7px 12px;
  border-width: 1px;
  border-style: solid;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 1.2rem;
  margin: 35px 10px;
  background-color: ${addColorTransparency(colors.secondary, 20)};
  @media screen and ${device.sm} {
    width: 300px;
    margin: 35px 6px;
  }
  &:hover,
  &:focus {
    background-color: ${addColorTransparency(colors.primary, 80)};
    border: 1px solid ${addColorTransparency(colors.secondary, 60)};
    outline: none;
  }
`;
