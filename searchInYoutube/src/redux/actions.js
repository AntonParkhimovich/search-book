import { CREATE_VIDEO_DATA } from "./types";

export const createData = (data) => {
  return {
    type: CREATE_VIDEO_DATA,
    payload: data,
  };
};
