import React, { useContext, useEffect } from "react";

// npm imports
import styled from "styled-components";

// consts imports

// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";

// component imports

// styled-components
const FilterSelectWrapper = styled.select`
  width: 120px;
  cursor: pointer;
  font-size: ${(props) => props.theme.normalText};
  border: none;
  background: unset;
  padding: 5px 5px 5px 0px;
  color: ${(props) => props.theme.black};
  /* width: 120px; */
  &::after {
    color: ${(props) => props.theme.black};
  }
  &::before {
    color: ${(props) => props.theme.black};
  }
  &:focus {
    outline: 2px solid #d6d6d6;
  }
  option {
    background-color: ${(props) => props.theme.gray3};
  }

  @media (min-width: 1024px) {
    width: unset;
  }
`;
// component

const FilterSelect = (props) => {
  const { handleSort, filterSortDefaultValue } = useContext(GlobalContext);

  return (
    <FilterSelectWrapper
      id="select-sort"
      onChange={(e) => handleSort(e.target.value)}
      value={filterSortDefaultValue}
    >
      <option value="Featured">Featured</option>
      <option value="Low to High">Price: Low to High</option>
      <option value="High to Low">Price: High to Low</option>
    </FilterSelectWrapper>
  );
};

export default FilterSelect;
