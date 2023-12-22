import React, { useContext } from "react";

// npm imports
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

// consts imports

// context imports
import { GlobalContext } from "../../../../Context/GlobalContext";
import { Text14 } from "../../../../Assets/Text/Text";

// component imports

// styled-components
const PriceRangeWrapper = styled.div`
  .MuiSlider-thumb {
    width: 20px;
    height: 20px;
    margin-top: -9px;
  }
  .MuiSlider-rail,
  .MuiSlider-rail {
    height: 3px;
  }
`;
const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "0 auto",
  },
  slider: {
    color: "#FD0405",
  },
  price: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceNumber: {
    color: "#707070",
  },
});

function valuetext(value) {
  return `${value}`;
}

// component
const PriceRange = (props) => {
  const { mainData, route, handlePriceRange, currentPriceRange } = useContext(
    GlobalContext
  );
  const classes = useStyles();
  let maxVal = Math.round(
    Math.max.apply(
      Math,
      mainData[route].map(function (o) {
        return o.price;
      })
    )
  );

  return (
    <PriceRangeWrapper className={classes.root}>
      <div className={classes.price}>
        <Text14 className={classes.priceNumber}>${currentPriceRange[0]}</Text14>
        <Text14 className={classes.priceNumber}>${currentPriceRange[1]}</Text14>
      </div>
      <Slider
        className={classes.slider}
        value={currentPriceRange}
        max={maxVal}
        onChange={handlePriceRange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </PriceRangeWrapper>
  );
};

export default PriceRange;
