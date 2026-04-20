import type {IPostsDummyjson} from "../IPostsDummyjson.ts";

export interface IPostsArray{
    posts: IPostsDummyjson[],
    total: number,
    skip: number,
    limit: number
}
