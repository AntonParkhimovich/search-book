import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { MainPaige } from "./MainPaige";
const Main = (props) => {
  const { videos } = props;
  return (
    <>
      <Switch>
        <main className={"main"}>
          {videos.length === undefined
            ? null
            : videos.map((item, index) => {
                return (
                  <Route path={`/page${index + 1}`} key={index}>
                    <MainPaige videos={item} key={index} />
                  </Route>
                );
              })}
        </main>
      </Switch>
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Main);
