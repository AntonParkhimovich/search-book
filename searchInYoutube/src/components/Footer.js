import { connect } from "react-redux";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../styles/footer.scss";
import { flipInY } from "react-animations";
import styled, { keyframes } from "styled-components";
import PageCounter from "./PageCounter";
import  ButtonFooter  from "./ButtonFooter";
import { createVideoPath } from "../redux/actions";
const FlipInY = styled.div`
  animation: 1s ${keyframes`${flipInY}`};
`;
const Footer = (props) => {
const{videos, createVideoPath }= props
  
  console.log(videos);
  return (
    <>
      <FlipInY>
        <footer className={"footer"}>
        <ButtonFooter text={'back'}/>
          <PageCounter count={parseInt(window.location.pathname.match(/\d+/))} />
         <ButtonFooter text={'next'}/>
        </footer>
      </FlipInY>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  createVideoPath
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);