import type {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import type {IPost} from "../models/IPost.ts";

const baseURL = import.meta.env.VITE_BASE_URL;
export const getAll = async<T, >(endpoint: string):Promise<T> =>{
    return await fetch(`${baseURL}${endpoint}`)
        .then(res => res.json());
}

getAll<IBaseResponseModel & { posts: IPost[]; }>('/posts');
