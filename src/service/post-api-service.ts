import type {IPost} from "../models/PostModels.ts";

export const getPost = async():Promise<IPost[]>  =>{
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}
