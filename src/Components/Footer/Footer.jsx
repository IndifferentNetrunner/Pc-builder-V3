import React, { useContext } from "react";

// npm imports
import styled, { css, withTheme } from "styled-components";
import { Link } from "@reach/router";
import SearchIcon from "@material-ui/icons/Search";

// consts imports
import { Paths } from "../../Consts/Paths";

// npm text imports
import { Heading20 } from "../../Assets/Text/Text";

// context imports
import { GlobalContext } from "../../Context/GlobalContext";

// component imports
import SearchBar from "./SearchBar/SearchBar";
import { useEffect } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import DarkModeIcon from "./DarkModeIcon/DarkModeIcon";

// styled-components
const FooterWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: -0.3%;
  left: 0;
  width: 100%;

  .search-bar {
    transition: 0.2s ease-in;
    background-color: ${(props) => props.theme.red};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51%;
    position: absolute;
    height: 100%;
    bottom: 0;
    z-index: -1;
    opacity: ${(props) => (props.searchBarActive ? "1" : "0")};
    left: ${(props) => (props.searchBarActive ? "0" : "100%")};
    input {
      width: 90%;
      padding: 8px;
      border: none;
      border-radius: 5px;
      color: ${(props) => props.theme.black};
    }
  }

  .right-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.red};
    width: 50%;
    border-top-left-radius: ${(props) =>
      props.searchBarActive ? "0px" : "40px"};
    padding: 18px 25px;
    position: relative;
    transition: 0.2s ease-in;
    .search-icon {
      display: flex;
      align-items: center;
      svg {
        font-size: 27px;
      }
    }
    .info {
      display: flex;
      align-items: center;
      svg {
        font-size: 27px;
      }
    }
    .burger-menu {
      display: flex;
      align-items: center;
      flex-direction: column;
      span {
        width: 26px;
        height: 3px;
        background-color: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.white};
        margin: 3px 0;
        border-radius: 2px;
        transition: 0.5s;
      }
      span.active:nth-child(1) {
        transform: rotateY(180deg) rotateZ(45deg) translate(3px, 3px);
      }
      span.active:nth-child(2) {
        transform: rotateY(180deg) rotateZ(-45deg) translate(3px, -3px);
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
// component

const Footer = (props) => {
  const {
    searchBarActive,
    setSearchBarActive,
    mobileMenuActive,
    setMobileMenuActive,
  } = useContext(GlobalContext);

  useEffect(() => {
    mobileMenuActive && setSearchBarActive(false);
  }, [mobileMenuActive]);

  return (
    <FooterWrapper searchBarActive={searchBarActive} className="footer">
      <div className="search-bar">
        <SearchBar />
      </div>
      <MobileMenu />
      <div className="right-wrapper">
        <div
          className="search-icon"
          onClick={() => {
            if (mobileMenuActive) {
              return;
            } else {
              setSearchBarActive(!searchBarActive);
            }
          }}
        >
          <SearchIcon />
        </div>
        <DarkModeIcon />
        <div
          className="burger-menu"
          onClick={() => {
            setMobileMenuActive(!mobileMenuActive);
          }}
        >
          <span className={mobileMenuActive ? "active" : ""}></span>
          <span className={mobileMenuActive ? "active" : ""}></span>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default withTheme(Footer);
