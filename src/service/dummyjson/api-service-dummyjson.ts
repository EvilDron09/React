
import type {IUsersResponse} from "../../models/dummyjson/ResponseElement/IUsersResponse.ts";
import type {IPostsResponse} from "../../models/dummyjson/ResponseElement/IPostsResponse.ts";
import type {ICommentsResponse} from "../../models/dummyjson/ResponseElement/ICommentsResponse.ts";


const baseUrl = ' https://dummyjson.com';
export const usersServiceDummyjson = {
   getUsersServiceDummyjson: async():Promise<IUsersResponse> =>{
      return await fetch(baseUrl +'/users')
          .then(value => value.json())
   }
}
export const postsServiceDummyjson = {
   getPostsServiceDummyjson: async():Promise<IPostsResponse> =>{
     return await fetch(baseUrl + '/posts')
          .then(value => value.json())

   }
}
export const commentsServiceDummyjson = {
   getCommentsServiceDummyjson: async():Promise<ICommentsResponse> =>{
     return await fetch(baseUrl + '/comments')
          .then(value => value.json())

   }
}
