import React, { useState, useContext, useEffect } from "react";

// npm imports
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import PowerIcon from "@material-ui/icons/Power";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { Link } from "@reach/router";

// text inports
import { Text14, Text17 } from "../../Assets/Text/Text";

// consts imports
import { Paths } from "../../Consts/Paths";

// context imports
import { GlobalContext } from "../../Context/GlobalContext";
import ItemDelete from "./ItemDelete/ItemDelete";
import MainTitle from "../MainShowCase/MainTitle/MainTitle";

// component imports

// styled-components
const MyItemsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  .my-items-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0px;
    .back-button,
    .save-button {
      display: flex;
      align-items: center;
      svg {
        color: ${(props) =>
          props.darkMode ? props.theme.black : props.theme.red};
        font-size: ${(props) => props.theme.iconSize};
      }
    }
  }
  .my-component-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding-right: 27px;
    .component-name-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 15px;
      .checked {
        flex-basis: 20%;
        margin-right: 10px;
        svg {
          color: ${(props) => props.theme.black};
        }
      }
      .component-name {
        flex-basis: 80%;
      }
    }
    hr {
      width: 100%;
    }
  }
  .component-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 27px;
    .component-img {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.gray3};
      border-radius: 15px;
      padding: 0 10px;
      height: 120px;
      flex-basis: 35%;
      margin-right: 40px;
      img {
        display: block;
        height: 100%;
      }
    }
    .component-detail {
      flex-basis: 65%;
      padding-right: 27px;
      .my-item-brand {
        color: ${(props) => props.theme.text_gray};
        margin-bottom: 10px;
      }
      .my-item-model {
        margin-bottom: 10px;
      }
      .delete-item {
        text-align: right;
        button {
          border: none;
          background: none;
          color: ${(props) => props.theme.black};
        }
      }
    }
  }
  .power-calculator,
  .price-calculator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .total-wattage,
    .total-price {
      display: flex;
      align-items: center;
      width: 90px;
      svg {
        margin-right: 5px;
        color: ${(props) => props.theme.black};
      }
    }
  }
  .price-calculator {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    .component-wrapper {
      width: 50%;
    }
    .components-holder {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-basis: 50%;
      justify-content: flex-start;
    }
  }

  @media (min-width: 1024px) {
    width: 40%;
    .price-calculator {
      margin-top: 30px;
    }
    .components-holder {
      width: 100%;
    }
    .my-items-navbar {
      justify-content: flex-end;
      .back-button {
        display: none;
      }
    }
  }
`;
// component

const MyItems = (props) => {
  const {
    deleteItem,
    totalPower,
    totalAmount,
    darkMode,
    clickedPurpose,
    setCurrentObj,
  } = useContext(GlobalContext);
  const [clickedCategory, setClickedCategory] = useState("");
  const [clickedId, setClickedId] = useState("");
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [downloadLink, setDownloadLink] = useState("");

  const makeTextFile = () => {
    const obj = [];

    for (const key in myItems) {
      if (myItems[key].length > 0) {
        myItems[key].forEach((el) =>
          obj.push(
            `Component: ${el.category}`,
            `Model: ${el.brand} ${el.model}`,
            `Price: ${el.price}`
          )
        );
      }
    }

    const data = new Blob([JSON.stringify(obj, null, 2)], {
      type: "text/plain",
    });

    // this part avoids memory leaks
    if (downloadLink !== "") window.URL.revokeObjectURL(downloadLink);

    // update the download link state
    setDownloadLink(window.URL.createObjectURL(data));
  };

  // useEffect(() => {
  //   makeTextFile();
  // }, [myItems]);

  return (
    <MyItemsWrapper darkMode={darkMode}>
      <div className="my-items-navbar">
        <div className="back-button" onClick={() => window.history.back()}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="save-button">
          <a download="list.txt" href={downloadLink}>
            <SaveAltIcon />
          </a>
        </div>
      </div>
      <div id="current-component">
        <MainTitle
          name={`${
            Object.values(myItems).filter((el) => el.length > 0).length
          }/${Object.keys(myItems).flat().length} 
          parts piched`}
        />
        <div className="price-calculator">
          <Text17>This build will cost you</Text17>
          <div className="total-price">
            <AttachMoneyIcon />
            <Text17>
              {totalAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </Text17>
          </div>
        </div>
        <div className="power-calculator">
          <Text17>For this build you will need</Text17>
          <div className="total-wattage">
            <PowerIcon />
            <Text17>{totalPower}W</Text17>
          </div>
        </div>
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-processor">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.Processor.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[0].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>Processor</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems.Processor.map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    setClickedCategory(el.category);
                    setClickedId(el.id);
                    handleOpen();
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-cpu-cooler">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["CPU Cooler"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[1].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>CPU&nbsp;Cooler</Text17>
            </Link>
          </div>
        </div>

        <hr />
      </div>
      <div className="components-holder">
        {myItems["CPU Cooler"].map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-motherboard">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.Motherboard.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[2].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>Motherboard</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems.Motherboard.map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    setClickedCategory(el.category);
                    setClickedId(el.id);
                    handleOpen();
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-graphic-card">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Graphic Card"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[3].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>Graphic&nbsp;Card</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems["Graphic Card"].map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-ram-memory">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["RAM Memory"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[4].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>RAM&nbsp;Memory</Text17>
            </Link>
          </div>
        </div>

        <hr />
      </div>
      <div className="components-holder">
        {myItems["RAM Memory"].map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-ssd">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.SSD.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[5].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>SSD</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems.SSD.map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-hard-drive">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Hard Drive"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[6].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>Hard&nbsp;Drive</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems["Hard Drive"].map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-optical-drive">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Optical Drive"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[7].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>Optical&nbsp;Drive</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems["Optical Drive"].map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-power-supply">
            <CheckIcon
              style={{
                visibility: `${
                  myItems["Power Supply"].length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[8].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>Power&nbsp;Supply</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems["Power Supply"].map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-component-wrapper">
        <div className="component-name-wrapper">
          <div className="checked checked-case">
            <CheckIcon
              style={{
                visibility: `${
                  myItems.Case.length === 0 ? "hidden" : "visible"
                }`,
              }}
            />
          </div>
          <div className="component-name">
            <Link
              onClick={() => {
                clickedPurpose.length > 0
                  ? setCurrentObj({ purpose: clickedPurpose })
                  : setCurrentObj({});
              }}
              to={Paths.paths.main.replace(
                "{COMPONENT}",
                Object.keys(myItems)[9].replace(" ", "_").toLocaleLowerCase()
              )}
            >
              <Text17>Case</Text17>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className="components-holder">
        {myItems.Case.map((el, i) => (
          <div key={i} className="component-wrapper">
            <div className="component-img">
              <img
                src={`/img/${el.category.replace(" ", "-").toLowerCase()}/${
                  el.img
                }`}
                alt=""
              />
            </div>
            <div className="component-detail">
              <Text14 className="my-item-brand">{el.brand}</Text14>
              <Text14 className="my-item-model">{el.model}</Text14>
              <Text14 className="my-item-price">${el.price}</Text14>
              <div className="delete-item">
                <button
                  onClick={() => {
                    deleteItem(el.category, el.id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal delete confirmation button */}
      <ItemDelete
        open={open}
        handleClose={handleClose}
        category={clickedCategory}
        id={clickedId}
      />
    </MyItemsWrapper>
  );
};

export default MyItems;
