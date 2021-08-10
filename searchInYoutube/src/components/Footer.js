
import React from "react";
import "../styles/footer.scss";
import { flipInY } from "react-animations";
import styled, { keyframes } from "styled-components";
import PageCounter from "./PageCounter";
import ButtonFooter from "./ButtonFooter";

const FlipInY = styled.div`
  animation: 1s ${keyframes`${flipInY}`};
`;
const Footer = (props) => {

  return (
    <>
      <FlipInY>
        <footer className={"footer"}>
          <ButtonFooter text={"back"} />
          <PageCounter
            count={parseInt(window.location.pathname.match(/\d+/))}
          />
          <ButtonFooter text={"next"} />
        </footer>
      </FlipInY>
    </>
  );
};
export default Footer

