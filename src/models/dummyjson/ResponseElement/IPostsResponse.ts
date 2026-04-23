import type {IPostsDummyjson} from "../IPostsDummyjson.ts";

export interface IPostsResponse {
    posts: IPostsDummyjson[],
    total: number,
    skip: number,
    limit: number
}
