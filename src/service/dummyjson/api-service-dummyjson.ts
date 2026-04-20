import {dummyjsonUrl} from "../../constant/urls.ts";
import type {IUsersDummyjson} from "../../models/dummyjson/IUsersDummyjson.ts";
import type {IPostsDummyjson} from "../../models/dummyjson/IPostsDummyjson.ts";
import type {ICommentsDummyjson} from "../../models/dummyjson/ICommentsDummyjson.ts";
import type {IUsersArray} from "../../models/dummyjson/ArrayElement/IUsersArray.ts";
import type {IPostsArray} from "../../models/dummyjson/ArrayElement/IPostsArray.ts";
import type {ICommentsArray} from "../../models/dummyjson/ArrayElement/ICommentsArray.ts";


export const usersServiceDummyjson = {
   getUsersServiceDummyjson: async():Promise<IUsersDummyjson[]> =>{
      const response:IUsersArray = await fetch(dummyjsonUrl.users.allUsers)
          .then(value => value.json())
      return response.users
   }
}
export const postsServiceDummyjson = {
   getPostsServiceDummyjson: async():Promise<IPostsDummyjson[]> =>{
      const response:IPostsArray =  await fetch(dummyjsonUrl.posts.allPosts)
          .then(value => value.json())
      return response.posts
   }
}
export const commentsServiceDummyjson = {
   getCommentsServiceDummyjson: async():Promise<ICommentsDummyjson[]> =>{
      const response:ICommentsArray =  await fetch(dummyjsonUrl.comments.allComments)
          .then(value => value.json())
      return response.comments
   }
}
