import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/posts-models/IPost.ts";
import {getPost, getPosts} from "../../services/api-service.ts";

type PostSliceType = {
    posts:IPost[];
    post:IPost|null
    loadState: boolean
}

const initialState:PostSliceType ={posts:[], post:null, loadState:false};

const loadPosts =createAsyncThunk('postSlice/loadPosts',
    async (userId:string , thunkAPI) => {
            try {
                const posts = await getPosts(userId);
                return thunkAPI.fulfillWithValue(posts);
            } catch (e){
                console.log(e)
                return thunkAPI.rejectWithValue('some error')
            }
        }
    );
const loadPost = createAsyncThunk('postSlice/loadPost',
    async (id:string, thunkAPI) =>{
        try {
            const post = await getPost(id);
            return thunkAPI.fulfillWithValue(post);
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
        }
    );

export const postSlice = createSlice({
    name:"postSlice",
    initialState: initialState,
    reducers:{
        changeLoadState: (state, action:PayloadAction<boolean>) =>{
            state.loadState=action.payload
        }
    },
    extraReducers:builder =>
        builder.addCase(loadPosts.fulfilled,(state,action:PayloadAction<IPost[]>) =>{
            state.posts=action.payload
        })
            .addCase(loadPosts.rejected,(state, action) =>{
                console.log(state);
                console.log(action);
            })
            .addCase(loadPost.fulfilled,(state, action:PayloadAction<IPost>) =>{
                state.post=action.payload
            })
            .addCase(loadPost.rejected,(state, action) =>{
                console.log(state);
                console.log(action);
            })
            .addMatcher(isFulfilled(loadPosts,loadPost),(state) =>{
                state.loadState=true;
            })
            .addMatcher(isRejected(loadPosts,loadPost),(state) =>{
                console.log(state);
            })
})

export const postSliceAction ={
    ...postSlice, loadPosts, loadPost
}
