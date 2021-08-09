import { CREATE_VIDEO_DATA } from "./types"

const initialState ={
    videos:[]
}
export const videosDataReducer = (state =initialState, action) => {
    switch(action.type){
        case CREATE_VIDEO_DATA:
            return state.videos = action.payload
       default: return state
    }
    
}