import axios from "axios";
let responseStringId = "";
export const getResponce = (params, setStore, createOnLoad, responseData) => {
  const { video } = params;
  if (video !== "") {
    createOnLoad(!responseData.onLoad);
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAG6gzoda68B9RJXJTtIZW3o0yuQZZ5DqI&type=video&part=snippet&maxResults=5&`,
        { params }
      )
      .then((response) => {
        response.data.items.map((item, index) => {
          index === 0
            ? (responseStringId = `${item.id.videoId}`)
            : (responseStringId = `${responseStringId},${item.id.videoId}`);
          return null;
        });
        return response;
      })
      .then((response) => {
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAG6gzoda68B9RJXJTtIZW3o0yuQZZ5DqI&id=${responseStringId}&part=statistics`
          )
          .then((data) => {
            data.data.items.map((item, index) => {
              response.data.items[index].statistics = item.statistics;
              return null;
            });
            responseStringId = "";
            setStore(response.data);
            createOnLoad(false);
          });
      });
  }
};
