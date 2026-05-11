import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../models/IComment.ts";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments:IComment[],
}

const initialCommentSliceState:CommentSliceType = {comments:[]};

const loadComments = createAsyncThunk('commentSlice/ladComments',
    async(_,thunkAPI) =>{
        try {
            const comments = await getAll<IComment[]>('/comments');
            console.log(comments)
            return thunkAPI.fulfillWithValue(comments);
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('sorry error')
        }
    })

export const commentSlice = createSlice({
    name:"commentSlice",
    initialState: initialCommentSliceState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(loadComments.fulfilled,(state, action:PayloadAction<IComment[]>)=>{
            state.comments = action.payload
        })
    }
})

export const commentsAction = {
    ...commentSlice,loadComments
}
