import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import MainPaige from "./MainPaige";
const Main = (props) => {
  const { videos, responseData } = props;
  return (
    <>
      <Switch>
        <Route path={`${responseData.path}`}>
          <main className={"main"}>
            {videos === undefined ? null : <MainPaige />}
          </main>
          <Footer />
        </Route>
      </Switch>
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Main);
