import type {IUser} from "../modules/IUser.ts";

export const getUsers =async(): Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())

}

export const getUser =async(id:string):Promise<IUser> =>{
    return await fetch('https://jsonplaceholder.typicode.com/users'+id)
        .then((response) => response.json());
}
