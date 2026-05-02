import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {IProduct} from "../models/IProducts.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginDataType = {
    username: string,
    password: string,
    expiresInMins: number,
}


const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});

axiosInstance.interceptors.request.use((requestObject) =>{
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject
})


export const login = async ({username, password, expiresInMins}: LoginDataType):Promise<IUserWithTokens> =>{
    const{data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login',{username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens))
    return userWithTokens;
}

export const loadAuthProducts = async():Promise<IProduct[]> =>{
    const {data:{products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products
}

export const refresh = async () =>{
     const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
     const  {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
         refreshToken:iUserWithTokens.refreshToken,
         expiresInMin: 1,
     });
     iUserWithTokens.accessToken = accessToken;
     iUserWithTokens.refreshToken = refreshToken;
     localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}
