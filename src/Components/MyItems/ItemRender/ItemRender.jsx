import React, { useContext } from "react";

// npm imports
import styled from "styled-components";

// consts imports

// context imports
import { GlobalContext } from "../../../Context/GlobalContext";

// component imports

// styled-components
const ItemRenderWrapper = styled.div``;
// component

const ItemRender = ({ item }) => {
  return (
    <ItemRenderWrapper>
      <div className="">
        <div className="component">{item.category}</div>
        <div>
          <hr />
        </div>
      </div>
      <div className="selected-component">
        <div className="selected-component-img">
          <img
            src={`/img/${item.category.replace(" ", "-").toLowerCase()}/${
              item.img
            }`}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </ItemRenderWrapper>
  );
};

export default ItemRender;
