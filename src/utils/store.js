import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";

const store = configureStore(
    {
        reducer: {
            app: appSlice,
            search: searchSlice,
            liveChat: chatSlice
        }
    }
);
export default store