import React, { useContext } from "react";

// npm imports
import styled from "styled-components";

// consts imports

// context imports
import { GlobalContext } from "../../../Context/GlobalContext";

// component imports
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

// styled-components
const SearchBarWrapper = styled.input`
  width: 90%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.black};

  @media only screen and (min-width: 1024px) {
    width: 100%;
    padding-right: 40px;
    background-color: ${(props) => props.theme.gray3};
  }
`;
// component

const SearchBar = (props) => {
  const { handleSearch } = useContext(GlobalContext);
  const { height, width } = useWindowDimensions();

  return (
    <SearchBarWrapper
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder={width >= 1024 ? "Search for components..." : ""}
    />
  );
};

export default SearchBar;
