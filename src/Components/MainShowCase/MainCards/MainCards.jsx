import React from "react";

// npm imports
import styled from "styled-components";
import { Text17 } from "../../../Assets/Text/Text";

// consts imports

// context imports
import Card from "./Card/Card";
// component imports

// styled-components
const MainCardsWrapper = styled.div`
  width: 90%;
  color: ${(props) => props.theme.black};
  padding: 30px 0 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 40px 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media (min-width: 1024px) {
    width: calc(95% - 238px);
    margin: 0 auto;
  }
`;
// component

const MainCards = ({ data, name }) => {
  return (
    <MainCardsWrapper>
      {data && data.length === 0 ? (
        <Text17>No results found.</Text17>
      ) : (
        data && data.map((el, i) => <Card key={el.id} el={el} name={name} />)
      )}
    </MainCardsWrapper>
  );
};

export default MainCards;
