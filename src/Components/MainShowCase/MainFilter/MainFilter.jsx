import React from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// consts imports

// context imports

// component imports
// import FilterRender from "./FilterRender/FilterRender";
// import PriceRange from "./PriceRange/PriceRange";
import MainFilterInner from "./MainFilterInner/MainFilterInner";

// npm text imports

// styled-components
const MainFilterWrapper = styled.div`
  .MuiButtonBase-root {
    .MuiIconButton-label {
      svg.MuiSvgIcon-root {
        color: ${(props) => props.theme.black};
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  // Accordion
  root: {
    width: "100%",
  },

  heading: {
    fontSize: "14px",
    color: "black",
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionStyle: {
    boxShadow: "none !important",
    position: "unset !important",
    borderBottom: `1px solid #D2D4D8`,
    margin: "0 !important",
    borderRadius: "0 !important",
  },
  accordionSummary: {
    padding: "0 !important",
  },
  borderTop: {
    borderTop: `1px solid #D2D4D8`,
  },
  // Modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.main_gray,
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
    textAlign: "center",
    marginBottom: "10px",
  },
  marginB: {
    marginBottom: "10px",
  },
  marginB20: {
    marginBottom: "20px",
  },
  marginT: {
    marginTop: "20px",
  },
  resetButton: {
    width: "100%",
    textAlign: "right",
  },
}));

const MainFilter = ({ open, handleClose, theme }) => {
  const classes = useStyles();
  return (
    <MainFilterWrapper>
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
            className={` modal ${classes.paper}`}
            style={{ backgroundColor: theme.gray3 }}
          >
            <MainFilterInner handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </MainFilterWrapper>
  );
};

export default withTheme(MainFilter);
