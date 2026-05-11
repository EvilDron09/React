import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slice/userSlice.ts";
import {postSlice} from "./slice/postSlice.ts";
import {commentSlice} from "./slice/commentSlice.ts";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer,
    }
})
