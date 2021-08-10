import { CREATE_VIDEO_PATH, CREATE_VIDEO_RESPONCE_ITEM } from "./types";
import { CREATE_ONLOAD } from "./types";

const initialState = {
  searchItem: "",
  onLoad: "false",
  path: "/",
};
export const responceDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_VIDEO_RESPONCE_ITEM: {
      let newState = Object.assign({}, state);
      newState.searchItem = action.payload;
      return newState;
    }
    case CREATE_ONLOAD: {
      let newState = Object.assign({}, state);
      newState.onLoad = action.payload;
      return newState;
    }

    case CREATE_VIDEO_PATH: {
      let newState = Object.assign({}, state);
      newState.path = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
