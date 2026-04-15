import type {IComment} from "../module/IComment.ts";
import type {ICommentDummyJSON} from "../module/ICommentDummyJSON.ts";

export const getComment = async ():Promise<IComment[]> =>{
    const response:ICommentDummyJSON = await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
    return response.comments
}
