import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled from "styled-components";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useParams } from "@reach/router";

// data imports
import { data } from "../../Data/data";

// consts imports

// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import Footer from "../Footer/Footer";

// component imports
import SkeletonDetails from "../Skeleton/SkeletonDetails";
import NavBar from "../NavBar/NavBar";
import CheckForPreviousComponent from "./CheckForPreviousComponent/CheckForPreviousComponent";

// npm text imports
import { Text22, Text17 } from "../../Assets/Text/Text";

// styled-components
const ComponentDetailsWrapper = styled.div`
  .cores-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
    .left {
      margin-right: 15px;
    }
    p {
      margin-bottom: 4px;
    }
  }
  .more-details {
    padding-bottom: 110px;
    width: 90%;
    margin: 0 auto;
    p {
      margin-bottom: 4px;
    }
  }
  .d-hide {
    display: none;
  }
  .details-img {
    position: relative;
    width: 100%;
    height: 250px;
    background: ${(props) => props.theme.gray3};
    display: flex;
    align-items: center;
    justify-content: center;
    .add-to-cart {
      border: none;
      background: linear-gradient(
        338deg,
        ${(props) => props.theme.pink},
        ${(props) => props.theme.red}
      );
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
      text-align: center;
      position: absolute;
      bottom: -14%;
      right: 8%;
      &:active {
        box-shadow: inset 20px 20px 48px #d50304, inset -20px -20px 48px #fe0190;
      }
      svg {
        font-size: ${(props) => props.theme.iconSize};
      }
    }
    img {
      padding: 20px 0;
      width: 50%;
      max-height: 100%;
    }
  }
  .details-model {
    width: 90%;
    padding-top: 30px;
    margin: 0 auto;
    .brand-detail {
      color: ${(props) => props.theme.text_gray};
      margin-bottom: 10px;
    }
  }
  .price-and-rating {
    width: 90%;
    padding-bottom: 60px;
    padding-top: 30px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .price {
      flex: 1;
    }
    .rating {
      display: flex;
      flex: 1.3;
      align-items: flex-end;
      justify-content: space-between;
      .progress-bar-wrapper {
        text-align: center;
        margin-right: 15px;
        p {
          margin-bottom: 3px;
          color: ${(props) => props.theme.text_gray};
        }
        .progress-bar {
          width: 150px;
          border: 1px solid ${(props) => props.theme.dark_gray};
          border-radius: 25px;
          .progress {
            padding: 8px;
            max-width: ${(props) => props.rating}%;
            background: linear-gradient(
              157deg,
              ${(props) => props.theme.pink},
              ${(props) => props.theme.red}
            );
            border-radius: 25px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .img-and-details-wrapper {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .details-img-wrapper {
        display: flex;
        flex: 1;
        height: 350px;
        justify-content: flex-end;
        .details-img {
          width: 70%;
          .add-to-cart {
            cursor: pointer;
            width: 60px;
            height: 60px;
            bottom: -8%;
          }
          box-shadow: 0 5.4px 5.3px rgba(0, 0, 0, 0.024),
            0 18.1px 17.9px rgba(0, 0, 0, 0.036),
            0 81px 80px rgba(0, 0, 0, 0.06);

          height: 100%;
          border-radius: 15px;
          img {
            width: 85%;
            object-fit: contain;
          }
        }
      }
      .details {
        flex: 1;
        .details-wrapper {
          padding-left: 20px;
          width: 70%;
        }
      }
    }
  }
`;
// component

const ComponentDetails = (props) => {
  const {
    addItem,
    setSearchBarActive,
    setComponentSelectorActive,
    showBackButton,
    setShowBackButton,
  } = useContext(GlobalContext);
  const [prevUrl, setPrevUrl] = useState(useParams());
  const [onLoaded, setOnLoaded] = useState(false);

  const currentCategory = Object.keys(data).filter(
    (el) => el.replace(/ /g, "_").toLowerCase() === prevUrl.currentComponent
  );

  const currentObj = data[currentCategory].filter(
    (el) =>
      `${el.brand.replace(/ /g, "_").toLowerCase()}_${el.model
        .replace(/ /g, "_")
        .toLowerCase()}` === prevUrl.componentDetails
  );

  const route = currentCategory.toString();
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  const {
    img,
    brand,
    model,
    price,
    rating,
    socket,
    clockSpeed,
    turboSpeed,
    cores,
    threads,
    powerConsumption,
    type,
    color,
    fanQuantity,
    fanSpeed,
    fanNoiseLevel,
    warranty,
    formFactor,
    maxCapacity,
  } = currentObj[0];

  //Rating
  let procentOfRating;
  if (currentCategory[0] === "Processor") {
    procentOfRating = Math.floor((rating / 100000) * 100);
  } else if (currentCategory[0] === "Graphic Card") {
    procentOfRating = Math.floor((rating / 30000) * 100);
  } else if (currentCategory[0] === "RAM Memory") {
    procentOfRating = Math.floor((rating / 5000) * 100);
  } else if (currentCategory[0] === "SSD") {
    procentOfRating = Math.floor((rating / 20000) * 100);
  } else if (currentCategory[0] === "Hard Drive") {
    procentOfRating = Math.floor((rating / 3000) * 100);
  } else {
    procentOfRating = Math.floor((rating / 5000) * 100);
  }

  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //When component details is open disable the serach bar.
  useEffect(() => {
    if (currentObj) {
      setSearchBarActive(false);
      setComponentSelectorActive(false);
      setShowBackButton(true);
    }
  }, [currentObj]);

  const handleOnLoad = () => {
    setOnLoaded(true);
  };

  return (
    <ComponentDetailsWrapper rating={procentOfRating}>
      <NavBar />

      {!onLoaded && <SkeletonDetails />}
      <div className="img-and-details-wrapper">
        <div className="details-img-wrapper">
          <div className={!onLoaded ? "d-hide" : "details-img"}>
            <img
              onLoad={handleOnLoad}
              src={`/img/${route.replace(" ", "-").toLowerCase()}/${img}`}
              alt=""
            />
            <button
              className="add-to-cart"
              disabled={
                route === "RAM Memory"
                  ? myItems["Motherboard"].length === 1 &&
                    myItems[route].length >= myItems.Motherboard[0].slots
                  : route === "SSD" || route === "Hard Drive"
                  ? myItems[route].length >= 2
                  : myItems[route].length >= 1
              }
              onClick={() => {
                // CPU Cooler
                route === "CPU Cooler"
                  ? myItems["Processor"].length === 1
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // Motherboard
                  route === "Motherboard"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // Graphic Card
                  route === "Graphic Card"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1 &&
                    myItems["Motherboard"].length === 1
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // RAM Memory
                  route === "RAM Memory"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1 &&
                    myItems["Motherboard"].length === 1 &&
                    myItems["Graphic Card"].length === 1
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // SSD
                  route === "SSD"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1 &&
                    myItems["Motherboard"].length === 1 &&
                    myItems["Graphic Card"].length === 1 &&
                    myItems["RAM Memory"].length >= 1
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // Hard Drive
                  route === "Hard Drive"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1 &&
                    myItems["Motherboard"].length === 1 &&
                    myItems["Graphic Card"].length === 1 &&
                    myItems["RAM Memory"].length >= 1
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // Optical Drive
                  route === "Optical Drive"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1 &&
                    myItems["Motherboard"].length === 1 &&
                    myItems["Graphic Card"].length === 1 &&
                    myItems["RAM Memory"].length >= 1 &&
                    (myItems["SSD"].length >= 1 ||
                      myItems["Hard Drive"].length >= 1)
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // Power Supply
                  route === "Power Supply"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1 &&
                    myItems["Motherboard"].length === 1 &&
                    myItems["Graphic Card"].length === 1 &&
                    myItems["RAM Memory"].length >= 1 &&
                    (myItems["SSD"].length >= 1 ||
                      myItems["Hard Drive"].length >= 1)
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // Case
                  route === "Case"
                  ? myItems["Processor"].length === 1 &&
                    myItems["CPU Cooler"].length === 1 &&
                    myItems["Motherboard"].length === 1 &&
                    myItems["Graphic Card"].length === 1 &&
                    myItems["RAM Memory"].length >= 1 &&
                    myItems["Power Supply"].length === 1 &&
                    (myItems["SSD"].length >= 1 ||
                      myItems["Hard Drive"].length >= 1)
                    ? addItem(currentObj[0])
                    : handleOpen()
                  : // Else
                    addItem(currentObj[0]);
              }}
            >
              <AddShoppingCartIcon />
            </button>
          </div>
        </div>
        <div className="details">
          <div className="details-wrapper">
            <div className="details-model">
              <Text17 className="brand-detail">{brand}</Text17>
              <Text22>{model}</Text22>
            </div>
            <div className="price-and-rating">
              <div className="price">
                <Text17>${price}</Text17>
              </div>
              {rating && (
                <div className="rating">
                  <div className="progress-bar-wrapper">
                    <Text17>Rating</Text17>
                    <div className="progress-bar">
                      <div className="progress"></div>
                    </div>
                  </div>
                  <div className="rating-num">
                    <Text17>{rating}</Text17>
                  </div>
                </div>
              )}
            </div>
            {route === "Processor" ? (
              <>
                <div className="cores-details">
                  <div className="left">
                    <Text17>Cores: {cores}</Text17>
                    <Text17>Socket: {socket}</Text17>
                    <Text17>Clock speed: {clockSpeed}</Text17>
                  </div>
                  <div>
                    <Text17>Threads: {threads}</Text17>
                    <Text17>Turbo speed: {turboSpeed}</Text17>
                    <Text17>Typical TDP: {powerConsumption} W &sup3;</Text17>
                  </div>
                </div>
                <div className="more-details">
                  <div></div>
                </div>
              </>
            ) : route === "CPU Cooler" ? (
              <div className="more-details">
                <Text17>Type: {type}</Text17>
                <Text17>Color: {color}</Text17>
                <Text17>Fan quantity: {fanQuantity}</Text17>
                <Text17>Fan speed: {fanSpeed}</Text17>
                <Text17>Fan noise level: {fanNoiseLevel}</Text17>
                <Text17>Warranty: {warranty}</Text17>
                <Text17 className="socket">
                  Sockets:
                  {socket &&
                    socket.map((el, i) => <span key={i}> {el}, </span>)}
                </Text17>
              </div>
            ) : route === "Motherboard" ? (
              <div className="more-details">
                <Text17>Socket: {socket}</Text17>
                <Text17>Form factor: {formFactor}</Text17>
                <Text17>Max capacity: {maxCapacity}</Text17>
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <CheckForPreviousComponent
        open={open}
        handleClose={handleClose}
        category={route}
      />
    </ComponentDetailsWrapper>
  );
};

export default ComponentDetails;
