import React, { useContext } from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// context imports
import { GlobalContext } from "../../Context/GlobalContext";

// styled-components
const SkeletonCardWrapper = styled.div`
  .skeleton-brand {
    width: 50%;
    margin-bottom: 15px;
  }
  .skeleton-img {
    border-radius: 15px;
    width: 100%;
    height: 180px;
    margin-bottom: 15px;
  }
  .skeleton-model {
    width: 90%;
    height: 22px;
    margin: 0 5% 15px;
  }
  .skeleton-price {
    width: 50%;
    margin: 0 25% 15px;
  }
  @media only screen and (min-width: 1024px) {
    .skeleton-img {
      height: 250px;
    }
  }
`;
// component

const SkeletonCard = (props) => {
  const { darkMode } = useContext(GlobalContext);
  return (
    <SkeletonCardWrapper>
      <SkeletonTheme
        color={darkMode ? "#3A3B3C" : ""}
        highlightColor={darkMode ? "#56585A" : "#F7F7F7"}
      >
        <Skeleton className="skeleton-brand" />
        <Skeleton className="skeleton-img" />
        <Skeleton className="skeleton-model" />
        <Skeleton className="skeleton-price" />
      </SkeletonTheme>
    </SkeletonCardWrapper>
  );
};

export default withTheme(SkeletonCard);
