import { useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../styles/video.scss";
import { useHistory } from "react-router";
const Video = (props) => {
  let { video } = props;
  const history = useHistory();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const clickHandler = () => {
    history.goBack();
  };
  return (
    <div className={"video-wrapper"}>
      <div className={"video"}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
          allowfullscreen="1"
        ></iframe>
      </div>
      <ArrowBackIosIcon
        style={{ color: "white", fontSize: 40, cursor: "pointer" }}
        onClick={clickHandler}
      />
    </div>
  );
};
export default Video;
