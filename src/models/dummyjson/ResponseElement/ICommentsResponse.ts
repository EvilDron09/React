import type {ICommentsDummyjson} from "../ICommentsDummyjson.ts";

export interface ICommentsResponse {
    comments: ICommentsDummyjson[],
    total: number,
    skip: number,
    limit: number
}
