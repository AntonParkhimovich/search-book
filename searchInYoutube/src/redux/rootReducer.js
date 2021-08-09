import { combineReducers } from "redux";
import { videosDataReducer } from "./videosDataReducer";

export const rootReducer = combineReducers({
  videos: videosDataReducer,
});
