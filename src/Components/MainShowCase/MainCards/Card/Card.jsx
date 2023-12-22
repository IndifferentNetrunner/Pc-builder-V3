import React, { useContext, useState } from "react";

// npm imports
import styled from "styled-components";
import { Link } from "@reach/router";

// consts imports
import { Paths } from "../../../../Consts/Paths";

// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";

// component imports
import SkeletonCard from "../../../Skeleton/SkeletonCard";

// npm text imports
import { Text14 } from "../../../../Assets/Text/Text";

// styled-components
const CardWrapper = styled.div`
  .d-hide {
    display: none;
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
  .card-title {
    padding-left: 5px;
    p {
      color: ${(props) => props.theme.text_gray};
    }
  }
  .card-img {
    background: ${(props) => props.theme.gray3};
    border-radius: 16px;
    border: none;
    padding: 15px;
    margin: 15px 0;
    img {
      display: block;
      width: 100%;
      height: 150px;
    }
  }
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: center;
    .model {
      margin-bottom: 15px;
    }
  }
  @media (min-width: 1024px) {
    .card-img {
      &:hover {
        /* outline: 2px solid black; */
        border-radius: 15px;
      }
      img {
        height: 220px;
        width: unset;
        margin: 0 auto;
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.15, 1.15);
        }
      }
    }
  }
`;
// component

const Card = ({ el, name }) => {
  const { route, handleDetails } = useContext(GlobalContext);
  const { brand, model, price, thumbnail } = el;
  const [onLoaded, setOnLoaded] = useState(false);

  const handleOnLoad = () => {
    setOnLoaded(true);
  };

  return (
    <CardWrapper>
      <Link
        to={Paths.paths.details
          .replace("{COMPONENT}", route.replace(" ", "_").toLowerCase())
          .replace(
            "{DETAILS}",
            `${brand.replace(/ /g, "_").toLowerCase()}_${model
              .replace(/ /g, "_")
              .toLowerCase()}`
          )}
        onClick={() => {
          handleDetails(
            `${brand.replace(/ /g, "_").toLowerCase()}_${model
              .replace(/ /g, "_")
              .toLowerCase()}`
          );
        }}
        className={!onLoaded ? "d-hide" : ""}
      >
        <div className="card-title">
          <Text14>{brand}</Text14>
        </div>
        <div className="card-img">
          <img
            onLoad={handleOnLoad}
            src={`/img/${name.replace(" ", "-").toLowerCase()}/${thumbnail}`}
            alt=""
          />
        </div>
        <div className="card-body">
          <div className="model">
            <Text14>{model}</Text14>
          </div>

          <div className="price">
            <Text14>${price}</Text14>
          </div>
        </div>
      </Link>
      {!onLoaded && <SkeletonCard />}
    </CardWrapper>
  );
};

export default Card;
