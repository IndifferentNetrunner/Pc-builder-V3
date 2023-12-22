import React, { useContext } from "react";

// npm imports
import styled from "styled-components";
import { GlobalContext } from "../../../Context/GlobalContext";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

// consts imports

// context imports

// component imports

// styled-components
const DarkModeIconWrapper = styled.div`
  .info {
    .moon-icon {
      transform: rotate(30deg);
    }
  }

  @media only screen and (min-width: 1024px) {
    .info {
      .moon-icon {
        color: #050505;
      }
    }
  }
`;
// component

const DarkModeIcon = (props) => {
  const { setDarkMode, darkMode } = useContext(GlobalContext);

  return (
    <DarkModeIconWrapper>
      <div
        className="info"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? (
          <Brightness7Icon className="sun-icon" />
        ) : (
          <Brightness3Icon className="moon-icon" />
        )}
      </div>
    </DarkModeIconWrapper>
  );
};

export default DarkModeIcon;
