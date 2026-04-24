import type {IReqResInResponse} from "../models/IReqResInResponse.ts";
import {apiKey} from "./api-key.ts";


export const getAllUsers = async (pg:string): Promise<IReqResInResponse> =>{
    return await fetch("https://reqres.in/api/users?page="+pg, {
        method: 'GET',
        headers: {
            "x-api-key": apiKey
        }
    })
        .then(value => value.json())
}

