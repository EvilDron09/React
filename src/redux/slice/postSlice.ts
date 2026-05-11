import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/api.service.ts";

type PostSliceType ={
    posts:IPost[]
}

const initialPostSliceState:PostSliceType = {posts:[]};

const loadPosts = createAsyncThunk("postSlice/loadPosts",
    async (_,thunkAPI) =>{
        try {
            const posts = await getAll<IPost[]>('/posts');
            console.log(posts)
            return thunkAPI.fulfillWithValue(posts)
        }catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue('sorry error');
        }
    })



export const postSlice = createSlice({
    name:'postSlice',
    initialState: initialPostSliceState,
    reducers:{},
    extraReducers:
    builder => {
        builder.addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) =>{
            state.posts = action.payload
        })
    }
})

export const postAction = {
    ...postSlice,loadPosts
}
