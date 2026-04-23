
import type {IUserResponse} from "../models/user/IUserResponse.ts";
import type {ICartResponse} from "../models/cart/ICartResponse.ts";

const baseUrl = "https://dummyjson.com";
export const userService ={
    getAllUser: async():Promise<IUserResponse> =>{
        return await fetch(baseUrl + '/users')
            .then(value => value.json());
    }
}
export const cartService ={
    getCartsOfUser: async(userId: string):Promise<ICartResponse> =>{
        return await fetch(baseUrl +'/carts/user/'+ userId)
            .then(value =>value.json())
    }
}
