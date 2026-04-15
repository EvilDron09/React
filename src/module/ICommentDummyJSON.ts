import type {IComment} from "./IComment.ts";

export interface ICommentDummyJSON{
    comments:IComment[],
    total: number,
    skip: number,
    limit: number
}
