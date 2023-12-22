import React, { useState, useContext, useEffect } from "react";

// npm imports
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useLocation } from "@reach/router";
import SearchIcon from "@material-ui/icons/Search";

//Component imports
import NavBar from "../NavBar/NavBar";
import MainTitle from "./MainTitle/MainTitle";
import MainCards from "./MainCards/MainCards";
import Footer from "../Footer/Footer";
import MainFilter from "./MainFilter/MainFilter";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
// npm text imports
import { Text17 } from "../../Assets/Text/Text";
// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import FilterSelect from "./MainFilter/FilterSelect/FilterSelect";
import SearchBar from "../Footer/SearchBar/SearchBar";
import MainFilterInner from "./MainFilter/MainFilterInner/MainFilterInner";

//styled-components
const MainShowCaseWrapper = styled.div`
  .sticky-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    background-color: ${(props) => props.theme.main_gray};
    padding-top: 10px;
    /* z-index: 5; */
    .search-bar-wrapper {
      display: none;
    }
  }

  .filter-wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .filter-icon-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;
      .filter-text {
        margin-left: 10px;
      }
    }

    .recomended {
      /* cursor: pointer; */
      color: ${(props) => props.theme.text_gray};
    }
    svg {
      font-size: ${(props) => props.theme.iconSize};
      color: ${(props) => props.theme.black};
    }
  }
  hr {
    border: 1px solid #d6d6d6;
    margin-bottom: 0;
  }
  .scroll-to-top {
    position: fixed;
    left: 22%;
    bottom: 6px;
    transform: translateX(-25%);
    width: 50px;
    height: 50px;
    display: flex;
    opacity: ${(props) => (props.scrollToTopActive ? "1" : "0")};
    z-index: ${(props) => (props.scrollToTopActive ? "1" : "-1")};
    transition: 0.2s ease-in;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.red};
    /* -webkit-box-shadow: 0px 0px 57px -1px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 57px -1px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 57px -1px rgba(255, 255, 255, 1); */

    svg {
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.iconSize};
    }
  }
  .filter-content-and-cards-wrapper {
    .filter-content {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    .main-title-wrapper {
      display: none;
    }
    .filter-wrapper {
      width: 95%;
    }
    .sticky-wrapper {
      z-index: 2;
      .search-bar-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        width: 40%;
        .search-icon {
          position: absolute;
          right: 2px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          svg {
            color: #d6d6d6;
            font-size: ${(props) => props.theme.iconSmallSize};
          }
        }
      }
    }
    .filter-content-and-cards-wrapper {
      position: relative;
      display: flex;
      align-items: flex-start;
      margin-left: ${(props) => (props.filterActive ? "0px" : "-238px")};
      transition: 0.3s ease-in-out;
      .filter-content {
        transition: 0.3s ease-in-out;
        border-right: 1px solid #d6d6d6;
        position: sticky;

        height: 100vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 25px 26px 0 26px;
        width: 238px;
        top: 50px;
        left: ${(props) => (props.filterActive ? "0" : "-238px")};
      }
    }
    .scroll-to-top {
      cursor: pointer;
      left: unset;
      right: 10%;
      transform: translateX(-10%);
      width: 40px;
      height: 40px;
      svg {
        font-size: 25px;
      }
    }
  }
`;

const MainShowCase = () => {
  const location = useLocation();
  const {
    mainData,
    filteredData,
    getRoute,
    setCurrentType,
    setCurrentColor,
    scrollToTopActive,
    setScrollToTopActive,
    searchBarActive,
    mobileMenuActive,
    setComponentSelectorActive,
    setShowBackButton,
    totalPower,
  } = useContext(GlobalContext);

  const { width } = useWindowDimensions();
  const [filterActive, setFilterActive] = useState(true);
  const currentComponent = Object.keys(mainData)
    .filter(
      (el) =>
        el.replace(" ", "_").toLowerCase() === location.pathname.split("/")[2]
    )
    .toString();
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  let currentData;

  if (currentComponent === "Motherboard" && myItems.Processor.length === 1) {
    currentData = filteredData[currentComponent].filter(
      (el) => el.socket === myItems.Processor[0].socket
    );
  } else if (
    currentComponent === "CPU Cooler" &&
    myItems.Processor.length === 1
  ) {
    currentData = filteredData[currentComponent].filter((el) =>
      el.socket.includes(myItems.Processor[0].socket)
    );
  } else if (
    currentComponent === "RAM Memory" &&
    myItems.Motherboard.length === 1
  ) {
    currentData = filteredData[currentComponent].filter((el) =>
      myItems.Motherboard[0].support.includes(el.memorySpeed)
    );
  } else if (
    currentComponent === "Power Supply" &&
    JSON.parse(totalPower) >= 400
  ) {
    currentData = filteredData[currentComponent].filter(
      (el) => el.wattage[1] >= JSON.parse(totalPower) + 100
    );
  } else if (
    currentComponent === "Power Supply" &&
    JSON.parse(totalPower) < 400 &&
    JSON.parse(totalPower) >= 1
  ) {
    currentData = filteredData[currentComponent].filter(
      (el) => el.wattage[0] <= 400
    );
  } else {
    currentData = filteredData[currentComponent];
  }
  //Model
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  //Replace the filter with empty values from the previos component
  useEffect(() => {
    getRoute(currentComponent);
    setCurrentType("");
    setCurrentColor("");
    setComponentSelectorActive(true);
    setShowBackButton(false);
  }, [currentComponent]);

  //Back to top when the scroll button is clicked.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollToTopActive(false);
  };

  //Show scroll to top button on scroll.
  const checkScrollTop = () => {
    if (window.pageYOffset > 600) {
      if (searchBarActive) {
        setScrollToTopActive(false);
      } else {
        setScrollToTopActive(true);
      }
    } else {
      setScrollToTopActive(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  //When search bar is clicked disable the scroll to top button.
  useEffect(() => {
    if (searchBarActive) {
      setScrollToTopActive(false);
    } else if (
      (searchBarActive && !mobileMenuActive) ||
      (!searchBarActive && mobileMenuActive)
    ) {
      setScrollToTopActive(false);
    } else if (window.pageYOffset > 600) {
      setScrollToTopActive(true);
    } else {
      return;
    }
  }, [searchBarActive]);

  //When burger menu is clicked disable the scroll to top button.
  useEffect(() => {
    if (mobileMenuActive) {
      setScrollToTopActive(false);
    } else if (
      (searchBarActive && !mobileMenuActive) ||
      (!searchBarActive && mobileMenuActive)
    ) {
      setScrollToTopActive(false);
    } else if (window.pageYOffset > 600) {
      setScrollToTopActive(true);
    } else {
      return;
    }
  }, [mobileMenuActive]);

  return (
    <MainShowCaseWrapper
      scrollToTopActive={scrollToTopActive}
      filterActive={filterActive}
    >
      <NavBar currentComponent={currentComponent} />
      <div className="main-title-wrapper">
        <MainTitle name={currentComponent} />
      </div>
      <div className="sticky-wrapper">
        <div className="filter-wrapper">
          <div
            className="filter-icon-wrapper"
            onClick={() => {
              setFilterActive(!filterActive);
              width < 1024 && handleOpen();
            }}
          >
            <TuneIcon />
            <Text17 className="filter-text">Filter</Text17>
          </div>
          <div className="search-bar-wrapper">
            <SearchBar />
            <div className="search-icon">
              <SearchIcon />
            </div>
          </div>
          <Text17 className="recomended">
            Sort by: <FilterSelect />
          </Text17>
        </div>
        <hr />
      </div>
      <div className="filter-content-and-cards-wrapper">
        <div className="filter-content">
          <MainFilterInner />
        </div>

        <MainCards data={currentData} name={currentComponent} />
      </div>
      <Footer />
      <MainFilter
        open={open}
        currentData={currentData}
        handleClose={handleClose}
      />
      <div className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </div>
    </MainShowCaseWrapper>
  );
};

export default MainShowCase;
