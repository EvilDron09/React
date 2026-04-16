import type {IUser} from "../model/IUser.ts";
import {urls} from "../constant/urls.ts";

export const usersService ={
    getUsers: async():Promise<IUser[]> =>{
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
    },

getUser: async(id:number):Promise<IUser[]> =>{
    return await fetch(urls.users.byId(id))
        .then(value => value.json())}
}
