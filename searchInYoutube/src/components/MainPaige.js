import VideoCard  from "./VideoCard";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Video from "./Video";
import { connect } from "react-redux";
import { skeletonData } from "./skeletonLoadData";

const FadeIn = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;
 const MainPaige = (props) => {
  const { videos, responseData} = props;
  const videosArray = videos.items
  const {onLoad}=responseData
  let { path } = useRouteMatch();
  console.log(videosArray);
  return (
    <>
      {onLoad ===false?videosArray.map((item, index) => {
        return (
          <FadeIn>
            <VideoCard video={item} key={index} />
            <Switch>
              <Route path={`${path}/${item.id.videoId}`}>
                <Video video={item} key={index} />
              </Route>
            </Switch>
          </FadeIn>
        );
      }):skeletonData.map((item, index)=>{
        return(
          <VideoCard video={item} key={index} />
        )
      })}
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(MainPaige);
