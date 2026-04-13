import type {IComment} from "../model/IComment.ts";

export const getComment = async():Promise<IComment[]> =>{
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}
