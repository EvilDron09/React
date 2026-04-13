import type {IPost} from "./IPost.ts"
export interface IPostDummyiJSON{
    posts:IPost[],
    skip:number,
    total:number,
    limit:number
}

