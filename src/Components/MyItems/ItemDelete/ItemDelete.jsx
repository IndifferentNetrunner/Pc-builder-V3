import React, { useContext } from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// consts imports

// context imports
import { GlobalContext } from "../../../Context/GlobalContext";

// component imports
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

// npm text imports
import { Text24, Text20 } from "../../../Assets/Text/Text";
// component imports

// styled-components
const ItemDeleteWrapper = styled.div``;

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
    width: "90%",
  },
  modalTitle: {
    marginTop: "10px",
    marginBottom: "20px",
  },
  marginB: {
    marginBottom: "30px",
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
  buttons2: {
    background: "none",
    border: "1px solid #d6d6d6",
    borderRadius: "25px",
    marginLeft: "5px",
    padding: "0",
    // width: "95px",
    cursor: "pointer",
    "&:hover": {
      background: "#F7F7F7",
      color: "#FD0405",
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
const ItemDelete = ({ open, handleClose, category, theme }) => {
  const { handleItems } = useContext(GlobalContext);

  const { width } = useWindowDimensions();

  const classes = useStyles();
  return (
    <ItemDeleteWrapper>
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
              Warning
            </Text24>
            <Text20 className={classes.marginB}>
              Removing the {category} will reset all components.
            </Text20>
            <div className={classes.wrapper}>
              <button
                className={width < 1024 ? classes.buttons : classes.buttons2}
                onClick={() => handleClose()}
              >
                <Text20 className={width >= 1024 && classes.buttons2Text}>
                  CANCEL
                </Text20>
              </button>
              <button
                className={width < 1024 ? classes.buttons : classes.buttons2}
                onClick={() => {
                  handleItems();
                  handleClose();
                }}
              >
                <Text20 className={width >= 1024 && classes.buttons2Text}>
                  DELETE
                </Text20>
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </ItemDeleteWrapper>
  );
};

export default withTheme(ItemDelete);
