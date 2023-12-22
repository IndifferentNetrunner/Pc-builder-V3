import React, { useContext } from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// consts imports
import { Paths } from "../../../Consts/Paths";

// context imports
import { GlobalContext } from "../../../Context/GlobalContext";

// npm text imports
import { Text24, Text20 } from "../../../Assets/Text/Text";
import { Link } from "@reach/router";

// component imports
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
// styled-components
const CheckForPreviousComponentWrapper = styled.div`
  .modal-btn {
    border: 1px solid gray;
  }
`;

//Modal
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    outline: "none",
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // width: "90%",
  },
  modalTitle: {
    marginTop: "10px",
    marginBottom: "20px",
  },
  marginB: {
    marginBottom: "30px",
  },
  marginBSmall: {
    marginBottom: "12px",
  },
  wrapper: {
    textAlign: "right",
  },
  buttons: {
    background: "none",
    padding: "3px 15px",
    border: "none",
    borderRadius: "25px",
    marginLeft: "2px",
    width: "92px",
  },
  buttons2Light: {
    background: "none",
    border: "1px solid #d6d6d6",
    borderRadius: "25px",
    marginLeft: "2px",
    padding: "0",
    width: "92px",
    cursor: "pointer",
    "&:hover": {
      background: "#F7F7F7",
      color: "#FD0405",
      transition: "0.2s ease-in-out",
    },
  },
  buttons2Dark: {
    background: "none",
    border: "1px solid #242526",
    borderRadius: "25px",
    marginLeft: "2px",
    padding: "0",
    width: "92px",
    cursor: "pointer",
    "&:hover": {
      background: "#242526",
      color: "#FD0405",
      transition: "0.2s ease-in-out",
    },
  },
  componentTextMain: {
    display: "inline",
  },
  componentText: {
    marginBottom: "7px",
    "&:hover": {
      color: "rgba(29,29,31,.6)",
      transition: "0.2s ease-in-out",
    },
  },
  buttons2Text: {
    width: "100%",
    padding: "3px 15px",
    "&:hover": {
      color: "#FD0405",
      transition: "0.2s ease-in-out",
    },
  },
}));

// component
const CheckForPreviousComponent = ({ open, handleClose, category, theme }) => {
  const { darkMode } = useContext(GlobalContext);
  const myItems = JSON.parse(localStorage.getItem("myItems"));

  const { width } = useWindowDimensions();

  const classes = useStyles();

  return (
    <CheckForPreviousComponentWrapper>
      <Modal
        id="filter-modal"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            className={classes.paper}
            style={{
              backgroundColor: theme.gray3,
              width: width < 1024 ? "90%" : "30%",
            }}
          >
            <Text24 className={classes.modalTitle} id="transition-modal-title">
              Note:
            </Text24>
            <div className={classes.marginB}>
              {
                // CPU Cooler
                category === "CPU Cooler" ? (
                  myItems["Processor"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[0]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Processor.
                      </Text20>
                    </Link>
                  ) : (
                    ""
                  )
                ) : // Motherboard
                category === "Motherboard" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add a CPU Cooler"
                    </Text20>
                  )
                ) : // Graphic Card
                category === "Graphic Card" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[1]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a CPU Cooler.
                      </Text20>
                    </Link>
                  ) : (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[2]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Motherboard.
                      </Text20>
                    </Link>
                  )
                ) : // RAM Memory
                category === "RAM Memory" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[1]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a CPU Cooler.
                      </Text20>
                    </Link>
                  ) : (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[3]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Graphic Card.
                      </Text20>
                    </Link>
                  )
                ) : // SSD
                category === "SSD" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[1]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a CPU Cooler.
                      </Text20>
                    </Link>
                  ) : myItems["Graphic Card"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[3]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Graphic Card.
                      </Text20>
                    </Link>
                  ) : (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[4]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a RAM Memory.
                      </Text20>
                    </Link>
                  )
                ) : // Hard Drive
                category === "Hard Drive" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[1]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a CPU Cooler.
                      </Text20>
                    </Link>
                  ) : myItems["Graphic Card"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[3]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Graphic Card.
                      </Text20>
                    </Link>
                  ) : myItems["RAM Memory"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[4]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a RAM Memory.
                      </Text20>
                    </Link>
                  ) : (
                    <Text20 className={classes.marginBSmall}>
                      Please add an SSD.
                    </Text20>
                  )
                ) : // Optical Drive
                category === "Optical Drive" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  (myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[1]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a CPU Cooler.
                      </Text20>
                    </Link>
                  ) : myItems["Graphic Card"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[3]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Graphic Card.
                      </Text20>
                    </Link>
                  ) : myItems["RAM Memory"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[4]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a RAM Memory.
                      </Text20>
                    </Link>
                  ) : myItems["SSD"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[5]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a SSD.
                      </Text20>
                    </Link>
                  ) : (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[6]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Hard Drive.
                      </Text20>
                    </Link>
                  )
                ) : // Power Supply
                category === "Power Supply" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  (myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[1]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a CPU Cooler.
                      </Text20>
                    </Link>
                  ) : myItems["Graphic Card"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[3]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Graphic Card.
                      </Text20>
                    </Link>
                  ) : myItems["RAM Memory"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[4]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a RAM Memory.
                      </Text20>
                    </Link>
                  ) : myItems["SSD"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[5]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a SSD.
                      </Text20>
                    </Link>
                  ) : (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[6]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Hard Drive.
                      </Text20>
                    </Link>
                  )
                ) : // Case
                category === "Case" ? (
                  myItems["Processor"].length === 0 &&
                  myItems["CPU Cooler"].length === 0 &&
                  myItems["Motherboard"].length === 0 &&
                  myItems["Graphic Card"].length === 0 &&
                  myItems["RAM Memory"].length === 0 &&
                  (myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0) &&
                  myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[0]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Processor
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Motherboard"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[2]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Motherboard
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (myItems["SSD"].length === 0 ||
                      myItems["Hard Drive"].length === 0) &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[1]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              CPU Cooler
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Graphic Card"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[3]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Graphic Card
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["RAM Memory"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[4]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              RAM Memory
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 ||
                    myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                          <span
                            className={classes.slashSeparator}
                            style={{
                              color: darkMode ? "#E4E6EB" : "#050505",
                              fontSize: "20px",
                              margin: "0 5px",
                            }}
                          >
                            /
                          </span>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["SSD"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[5]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              SSD
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Hard Drive"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Hard Drive"].length === 0 &&
                    myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[6]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Hard Drive
                            </Text20>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["Power Supply"].length === 0 ? (
                    <>
                      <Text20 className={classes.marginBSmall}>
                        Please add the following components:
                      </Text20>
                      <ul className="modal-ul">
                        <li>
                          <Link
                            to={Paths.paths.main.replace(
                              "{COMPONENT}",
                              Object.keys(myItems)[8]
                                .replace(" ", "_")
                                .toLocaleLowerCase()
                            )}
                          >
                            <Text20
                              className={`${classes.componentTextMain} ${
                                width >= 1024 && classes.componentText
                              }`}
                            >
                              Power Supply
                            </Text20>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : myItems["CPU Cooler"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[1]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a CPU Cooler.
                      </Text20>
                    </Link>
                  ) : myItems["Graphic Card"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[3]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Graphic Card.
                      </Text20>
                    </Link>
                  ) : myItems["RAM Memory"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[4]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a RAM Memory.
                      </Text20>
                    </Link>
                  ) : myItems["SSD"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[5]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a SSD.
                      </Text20>
                    </Link>
                  ) : myItems["Hard Drive"].length === 0 ? (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[6]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Hard Drive.
                      </Text20>
                    </Link>
                  ) : (
                    <Link
                      to={Paths.paths.main.replace(
                        "{COMPONENT}",
                        Object.keys(myItems)[8]
                          .replace(" ", "_")
                          .toLocaleLowerCase()
                      )}
                    >
                      <Text20 className={classes.marginBSmall}>
                        Please add a Power Supply.
                      </Text20>
                    </Link>
                  )
                ) : (
                  // End
                  ""
                )
              }

              {/* Removing the {category} will reset all components. */}
            </div>
            <div className={classes.wrapper}>
              <button
                className={
                  width < 1024
                    ? classes.buttons
                    : darkMode
                    ? classes.buttons2Dark
                    : classes.buttons2Light
                }
                onClick={() => handleClose()}
              >
                <Text20 className={width >= 1024 && classes.buttons2Text}>
                  OK
                </Text20>
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </CheckForPreviousComponentWrapper>
  );
};

export default withTheme(CheckForPreviousComponent);
