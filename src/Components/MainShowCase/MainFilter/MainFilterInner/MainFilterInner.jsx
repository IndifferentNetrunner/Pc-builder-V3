import React, { useContext, useEffect, useState } from "react";

// npm imports
import styled, { withTheme } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// consts imports

// component imports
import FilterRender from "../FilterRender/FilterRender";
import PriceRange from "../PriceRange/PriceRange";
import useWindowDimensions from "../../../../Hooks/useWindowDimensions";
// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";

// npm text imports
import { Text17, Text14 } from "../../../../Assets/Text/Text";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.main_gray,
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
    cursor: "pointer",
  },
}));
// styled-components
const MainFilterInnerWrapper = styled.div`
  .MuiIconButton-label {
    svg {
      color: ${(props) => props.theme.black};
    }
  }
  @media (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`;
// component
const MainFilterInner = ({ theme, handleClose }) => {
  const classes = useStyles();
  const {
    mainData,
    brands,
    type,
    color,
    clickedBrands,
    clickedTypes,
    clickedColors,
    clickedPurpose,
    handleReset,
    purposeData,
  } = useContext(GlobalContext);
  const { width } = useWindowDimensions();
  const route = localStorage.getItem("route");

  const [expanded, setExpanded] = useState("panel-purpose");

  const handleExpanded = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <MainFilterInnerWrapper>
      <Text17
        className={`${classes.modalTitle} ${classes.marginB20}`}
        id="transition-modal-title"
      >
        Filter by:
      </Text17>
      <div className={classes.root}>
        <Accordion
          className={`${classes.accordionStyle} ${classes.borderTop}`}
          style={{
            backgroundColor: width >= 1024 ? theme.main_gray : theme.gray3,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummary}
          >
            <Typography
              className={`${classes.heading} brand`}
              style={{ color: theme.black }}
            >
              Brand
            </Typography>
          </AccordionSummary>
          {brands &&
            brands.map((el, i) => (
              <FilterRender
                clickedElement={clickedBrands}
                filterType="brand"
                key={i}
                element={el}
              />
            ))}
        </Accordion>
        {route === "Processor" && (
          <Accordion
            expanded={expanded === "panel-purpose"}
            onChange={handleExpanded("panel-purpose")}
            className={`${classes.accordionStyle} ${classes.borderTop}`}
            style={{
              backgroundColor: width >= 1024 ? theme.main_gray : theme.gray3,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={classes.accordionSummary}
            >
              <Typography
                className={classes.heading}
                style={{ color: theme.black }}
              >
                Purpose
              </Typography>
            </AccordionSummary>
            <>
              {Object.keys(purposeData).map((el, i) => (
                <FilterRender
                  clickedElement={clickedPurpose}
                  filterType="purpose"
                  key={i}
                  element={el}
                />
              ))}
            </>
          </Accordion>
        )}
        {mainData[route][0].type !== undefined && (
          <Accordion
            className={classes.accordionStyle}
            style={{
              backgroundColor: width >= 1024 ? theme.main_gray : theme.gray3,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={classes.accordionSummary}
            >
              <Typography
                className={classes.heading}
                style={{ color: theme.black }}
              >
                Type
              </Typography>
            </AccordionSummary>
            <>
              {type &&
                type.map((el, i) => (
                  <FilterRender
                    clickedElement={clickedTypes}
                    filterType="type"
                    key={i}
                    element={el}
                  />
                ))}
            </>
          </Accordion>
        )}
        {mainData[route][0].color !== undefined && (
          <Accordion
            className={classes.accordionStyle}
            style={{
              backgroundColor: width >= 1024 ? theme.main_gray : theme.gray3,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={classes.accordionSummary}
            >
              <Typography
                className={classes.heading}
                style={{ color: theme.black }}
              >
                Color
              </Typography>
            </AccordionSummary>
            <>
              {color &&
                color.map((el, i) => (
                  <FilterRender
                    clickedElement={clickedColors}
                    filterType="color"
                    key={i}
                    element={el}
                  />
                ))}
            </>
          </Accordion>
        )}
      </div>

      {/*  */}
      <div className={`price-range ${classes.marginT}`}>
        <Text14 className={classes.marginB}>Price range</Text14>
        <PriceRange />
      </div>
      <div className={classes.resetButton}>
        <Text17
          onClick={() => {
            width < 1024 && handleClose();
            handleReset();
          }}
        >
          Reset
        </Text17>
      </div>
    </MainFilterInnerWrapper>
  );
};

export default withTheme(MainFilterInner);
