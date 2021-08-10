import { combineReducers } from "redux";
import { videosDataReducer } from "./videosDataReducer";
import { responceDataReducer } from "./responseDataReduser";

export const rootReducer = combineReducers({
  videos: videosDataReducer,
  responseData: responceDataReducer
});
