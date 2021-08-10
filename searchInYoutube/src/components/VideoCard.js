import "../styles/card.scss";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CommentIcon from "@material-ui/icons/Comment";
import Skeleton from "@material-ui/lab/Skeleton";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { useState } from "react";

const VideoCard = (props) => {
  let { url } = useRouteMatch();
  let { video, responseData } = props;
  const onLoad = responseData.onLoad;
  let [loadImage, setLoadImage] = useState(true);
  const loadHandler = () => {
    setLoadImage(false);
  };
  return (
    <div className={"video-card"}>
      <div className={"video-card__header"}>
        {onLoad ? (
          <Skeleton variant={video.rect} width={"100%"} height={151} />
        ) : (
          <Link className={`link-video`} to={`${url}/${video.id.videoId}`}>
            <Skeleton
              variant={video.rect}
              width={"100%"}
              height={"151px"}
              style={{ display: loadImage ? "block" : "none" }}
            />
            <img
              src={video.snippet.thumbnails.medium.url}
              className={"video-image"}
              alt={"preview"}
              onLoad={loadHandler}
              style={{ display: loadImage ? "none" : "block" }}
            />
          </Link>
        )}
      </div>
      <div className={"video-card__main"}>
        {onLoad ? (
          <Skeleton variant={video.text} />
        ) : (
          <h2 className={"video-card__chanell"}>
            {video.snippet.channelTitle}
          </h2>
        )}
        {onLoad ? (
          <Skeleton variant={video.text} />
        ) : (
          <h2 className={"video-card__title"}>{video.snippet.title}</h2>
        )}
        <ul className={"statistics"}>
          {onLoad ? (
            <Skeleton variant={video.text} />
          ) : (
            <li className={"statistics-items"}>
              <ThumbUpIcon />
              {video.statistics.likeCount}
            </li>
          )}
          {onLoad ? (
            <Skeleton variant={video.text} />
          ) : (
            <li className={"statistics-items"}>
              <ThumbDownIcon />
              {video.statistics.dislikeCount}
            </li>
          )}
          {onLoad ? (
            <Skeleton variant={video.text} />
          ) : (
            <li className={"statistics-items"}>
              <VisibilityIcon />
              {video.statistics.viewCount}
            </li>
          )}
          {onLoad ? (
            <Skeleton variant={video.text} />
          ) : (
            <li className={"statistics-items"}>
              <CommentIcon />
              {video.statistics.commentCount}
            </li>
          )}
        </ul>
      </div>
      <div className={"video-card___footer"}></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(VideoCard);
