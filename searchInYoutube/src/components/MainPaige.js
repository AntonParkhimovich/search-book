import VideoCard from "./VideoCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Video from "./Video";
import { connect } from "react-redux";
import { skeletonData } from "./skeletonLoadData";

const MainPaige = (props) => {
  const { videos, responseData } = props;
  const videosArray = videos.items;
  const { onLoad } = responseData;
  let { path } = useRouteMatch();
  return (
    <>
      {onLoad === false || videosArray !== undefined
        ? videosArray.map((item, index) => {
            return (
              <>
                <VideoCard video={item} key={index} />
                <Switch>
                  <Route path={`${path}/${item.id.videoId}`}>
                    <Video video={item} key={index} />
                  </Route>
                </Switch>
              </>
            );
          })
        : skeletonData.map((item, index) => {
            return <VideoCard video={item} key={index} />;
          })}
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(MainPaige);
