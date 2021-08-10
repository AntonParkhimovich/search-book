import "../styles/header.scss";
import "../styles/btn.scss";
import { connect } from "react-redux";
import {
  createData,
  createResponseItem,
  createVideoPath,
  createOnLoad,
} from "../redux/actions";
import { getResponce } from "./getResponse";
import { useHistory } from "react-router-dom";
import { Params } from "./getParamResponse";

const Header = (porps) => {
  let {
    createData,
    createResponseItem,
    responseData,
    createVideoPath,
    createOnLoad,
  } = porps;
  let { searchItem } = responseData;

  const history = useHistory();
  const changeHandler = (event) => {
    let { value } = event.target;
    createResponseItem(value);
  };
  const clickHandler = () => {
    const params = new Params(searchItem);
    getResponce(params, createData, createOnLoad, responseData);
    createVideoPath("/page1");
    history.push("/page1");
  };
  return (
    <>
      <header
        className={
          `${history.location.pathname}` === "/" ? "header active" : "header"
        }
      >
        <input
          type={"text"}
          placeholder={"Enter Video name"}
          onChange={changeHandler}
          value={searchItem}
        />
        <button className={"btn btn-search"} onClick={clickHandler}>
          Search Video
        </button>
      </header>
    </>
  );
};
const mapDispatchToProps = {
  createData,
  createResponseItem,
  createVideoPath,
  createOnLoad,
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
