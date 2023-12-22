import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import { GlobalContext } from "../../../../Context/GlobalContext";

// consts imports

// context imports

// npm text imports
import { Span14 } from "../../../../Assets/Text/Text";

// component imports

// styled-components
const FilterRenderWrapper = styled.span`
  span {
    margin-right: 15px;
  }

  .active {
    color: ${(props) => props.theme.red};
    background-color: ${(props) => props.theme.main_gray};
  }

  .rendered-element {
    display: block;
    width: 100% + 10px;
    padding: 10px 10px;
    margin: 0px -10px 3px;
  }
  @media only screen and (min-width: 1024px) {
    .rendered-element {
      cursor: pointer;
      span {
        &:hover {
          color: ${(props) => props.theme.red};
          background-color: ${(props) => props.theme.main_gray};
        }
      }
    }
  }
`;

const FilterRender = ({ element, clickedElement, filterType }) => {
  const { findClickedElement } = useContext(GlobalContext);

  const [isActive, setIsActive] = useState(clickedElement.includes(element));

  return (
    <FilterRenderWrapper
      onClick={() => {
        findClickedElement(element, filterType);

        filterType === "purpose"
          ? setIsActive(clickedElement.toString() === element ? true : false)
          : setIsActive(!isActive);
      }}
    >
      <span
        className={`rendered-element ${
          filterType === "purpose"
            ? clickedElement.toString() === element
              ? "active"
              : ""
            : isActive
            ? "active"
            : ""
        }`}
      >
        <Span14
          className={`${
            filterType === "purpose"
              ? clickedElement.toString() === element
                ? "active"
                : ""
              : isActive
              ? "active"
              : ""
          }`}
        >
          {element}
        </Span14>
      </span>
    </FilterRenderWrapper>
  );
};

export default FilterRender;
