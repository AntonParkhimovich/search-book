import { CREATE_VIDEO_DATA } from "./types";
import { CREATE_VIDEO_RESPONCE_ITEM } from "./types";
import { CREATE_ONLOAD } from "./types";

import { CREATE_VIDEO_PATH } from "./types";

export const createData = (data) => {
  return {
    type: CREATE_VIDEO_DATA,
    payload: data,
  };
};
export const createResponseItem = (item) => {
  return {
    type: CREATE_VIDEO_RESPONCE_ITEM,
    payload: item,
  };
};
export const createOnLoad = (token) => {
  return {
    type: CREATE_ONLOAD,
    payload: token,
  };
};

export const createVideoPath = (path) => {
  return {
    type: CREATE_VIDEO_PATH,
    payload: path,
  };
};
