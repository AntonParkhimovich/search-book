import { connect } from "react-redux";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../styles/footer.scss";
import { flipInY } from "react-animations";
import styled, { keyframes } from "styled-components";
const FlipInY = styled.div`
  animation: 1s ${keyframes`${flipInY}`};
`;
const Footer = (props) => {
  let { videos } = props;
  let history = useHistory();
  const clickHandler = ({ target }) => {
    const pathNumber = parseInt(window.location.pathname.match(/\d+/));
    let newPath;
    if (target.id === "back") {
      pathNumber === 1
        ? (newPath = "/page10")
        : (newPath = `/page${pathNumber - 1}`);
    }
    if (target.id === "next") {
      pathNumber === 10
        ? (newPath = "/page1")
        : (newPath = `/page${pathNumber + 1}`);
    }
    history.push(`${newPath}`);
    newPath = "";
  };
  return (
    <>
      <FlipInY>
        {videos.length === undefined ? null : (
          <footer className={"footer"}>
            <button
              onClick={clickHandler}
              className={"btn btn-footer"}
              id={"back"}
            >
              Back
            </button>
            {videos.map((item, index) => {
              return (
                <NavLink
                  activeClassName="nav-link__active"
                  className={"nav-link"}
                  to={`\page${index + 1}`}
                  key={index + 1}
                >
                  {index + 1}
                </NavLink>
              );
            })}
            <button
              onClick={clickHandler}
              className={"btn btn-footer"}
              id={"next"}
            >
              Next
            </button>
          </footer>
        )}
      </FlipInY>
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Footer);
