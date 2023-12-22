import React, { useContext, useEffect } from "react";
// npm imports
import styled from "styled-components";

// npm text imports
import { Heading28 } from "../../../Assets/Text/Text";
import { GlobalContext } from "../../../Context/GlobalContext";

// component imports
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import MobileMenu from "../../Footer/MobileMenu/MobileMenu";

//styled-components
const MainTitleWrapper = styled.div`
  position: relative;
  .MainTitle {
    width: 90%;
    margin: 30px auto 60px;
  }
  .MainTitleMyItems {
    width: 100%;
    margin: 30px auto 30px;
  }

  @media only screen and (min-width: 1024px) {
    .MainTitle {
      width: 100%;
    }
    .MainTitle,
    .MainTitleMyItems {
      margin: 0;
    }
  }
`;

const MainTitle = ({ name }) => {
  const { mobileMenuActive, setMobileMenuActive } = useContext(GlobalContext);
  const { height, width } = useWindowDimensions();

  const myItems = JSON.parse(localStorage.getItem("myItems"));

  return (
    <MainTitleWrapper>
      <div
        className={
          Object.keys(myItems).includes(name) ? "MainTitle" : "MainTitleMyItems"
        }
      >
        <Heading28
          onClick={() => {
            width >= 1024 && setMobileMenuActive(!mobileMenuActive);
          }}
        >
          {name}
        </Heading28>
      </div>
      <MobileMenu />
    </MainTitleWrapper>
  );
};

export default MainTitle;
