import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice(
    {
        name:"videos",
        initialState:{
            videos : []
        },
        reducers:{
            showVideos: (state,action) => {
                videos.push(action.payload);
            }
        }
    }
)

export const {showVideos} = videoSlice.actions;
export default videoSlice.reducer;
export const videoSelector = state => state.video.videos;
export const fetchVideos = () => {
    return async (dispatch,getState) => {
        try{
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            console.log(json);
            dispatch(showVideos(json));
        } catch(err){
        }
    }
}