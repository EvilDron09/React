import * as axios from "axios";
import type {IUser} from "../models/users-models/IUser.ts";
import type {IPost} from "../models/posts-models/IPost.ts";

const  axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type': 'application/json'},
})

export const getUsers = async():Promise<IUser[]> =>{
    const {data} = await axiosInstance.get<IUser[]>('/users');
     return data;
}

export const getUser = async(id:string):Promise<IUser> =>{
    const {data} = await axiosInstance.get<IUser>(`/users/${id}`);
    return data
}

export const getPosts = async(userId:string):Promise<IPost[]> =>{
    const {data} = await axiosInstance.get<IPost[]>(`users/${userId}/posts`);
    return data
}
export const getPost = async(id:string):Promise<IPost> =>{
    const {data} = await axiosInstance.get<IPost>(`./posts/${id}`);
    return data
}
