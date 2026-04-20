import type {ICommentsDummyjson} from "../ICommentsDummyjson.ts";

export interface ICommentsArray{
    comments: ICommentsDummyjson[],
    total: number,
    skip: number,
    limit: number
}
