import React, { useContext } from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// context imports
import { GlobalContext } from "../../Context/GlobalContext";

// component imports
import useWindowDimensions from "../../Hooks/useWindowDimensions";

// styled-components
const SkeletonDetailsWrapper = styled.div`
  position: relative;
  .skeleton-details {
    height: 250px;
  }
  .skeleton-btn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    bottom: -14%;
    right: 8%;
  }
  @media only screen and (min-width: 1024px) {
    .skeleton-wrapper {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      left: 15%;
      position: absolute;
      .skeleton {
        flex: 1;
        height: 350px;
        position: relative;
        .skeleton-details {
          height: 350px;
          border-radius: 15px;
        }
        .skeleton-btn {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          position: absolute;
          bottom: -9%;
          right: 8%;
        }
      }
      .text-skeleton {
        flex: 1;
      }
    }
  }
`;
// component

const SkeletonDetails = (props) => {
  const { darkMode } = useContext(GlobalContext);

  const { width } = useWindowDimensions();
  return (
    <SkeletonDetailsWrapper>
      {width < 1024 ? (
        <>
          <SkeletonTheme
            color={darkMode ? "#3A3B3C" : "white"}
            highlightColor={darkMode ? "#56585A" : "#F7F7F7"}
          >
            <Skeleton className="skeleton-details" />
          </SkeletonTheme>
          <SkeletonTheme
            color={darkMode ? "#56585A" : ""}
            highlightColor={darkMode ? "#3A3B3C" : "#F7F7F7"}
          >
            <Skeleton className="skeleton-btn" />
          </SkeletonTheme>
        </>
      ) : (
        <div className="skeleton-wrapper">
          <div className="skeleton">
            <SkeletonTheme
              color={darkMode ? "#3A3B3C" : "white"}
              highlightColor={darkMode ? "#56585A" : "#F7F7F7"}
            >
              <Skeleton className="skeleton-details" />
            </SkeletonTheme>
            <SkeletonTheme
              color={darkMode ? "#56585A" : ""}
              highlightColor={darkMode ? "#3A3B3C" : "#F7F7F7"}
            >
              <Skeleton className="skeleton-btn" />
            </SkeletonTheme>
          </div>
          <div className="text-skeleton"></div>
        </div>
      )}
    </SkeletonDetailsWrapper>
  );
};

export default withTheme(SkeletonDetails);
