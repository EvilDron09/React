import type {IPost} from "../models/IPost.ts";
import type {IPostDummyiJSON} from "../models/IPostDummyiJSON.ts";

export const getPost = async():Promise<IPost[]> =>{
    const response:IPostDummyiJSON = await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
    return response.posts
}
