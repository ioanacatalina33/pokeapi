import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {
  device,
  colors,
  addDefaultTransition,
  addColorTransparency,
} from "../../utils/cssUtils";

interface SearchBarProps {
  onSearchQuery: (query: string) => void;
}

const SearchBar = ({onSearchQuery}: SearchBarProps) => {
  let [keyPressedTimeout, setKeyPressedTimeout] = useState<number>(0);

  useEffect(() => {
    if (keyPressedTimeout) return () => clearTimeout(keyPressedTimeout);
  }, []);

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
    <CenteredDiv>
      <StyledInput type="search" placeholder="Search for pokemons" onChange={onChange} />
    </CenteredDiv>
  );
};

export default SearchBar;

const StyledInput = styled.input`
  ${addDefaultTransition()};
  width: 100%;
  padding: 7px 12px;
  border-width: 1px;
  border-style: solid;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: ${addColorTransparency(colors.secondary, 20)};
  @media screen and ${device.sm} {
    width: 300px;
  }
  &:hover,
  &:focus {
    background-color: ${addColorTransparency(colors.primary, 80)};
    border: 1px solid ${addColorTransparency(colors.secondary, 60)};
    outline: none;
  }
`;

const CenteredDiv = styled.div`
  width: 100%;
  margin: 30px 1px;
  text-align: center;
`;
