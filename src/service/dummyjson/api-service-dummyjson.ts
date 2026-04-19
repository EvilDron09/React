import {dummyjsonUrl} from "../../constant/urls.ts";
import type {IUsersDummyjson} from "../../models/dummyjson/IUsersDummyjson.ts";
import type {IPostsDummyjson} from "../../models/dummyjson/IPostsDummyjson.ts";
import type {ICommentsDummyjson} from "../../models/dummyjson/ICommentsDummyjson.ts";


export const usersServiceDummyjson = {
   getUsersServiceDummyjson: async():Promise<IUsersDummyjson[]> =>{
      return await fetch(dummyjsonUrl.users.allUsers)
          .then(value => value.json())
   }
}
export const postsServiceDummyjson = {
   getPostsServiceDummyjson: async():Promise<IPostsDummyjson[]> =>{
      return await fetch(dummyjsonUrl.posts.allPosts)
          .then(value => value.json())
   }
}
export const commentsServiceDummyjson = {
   getCommentsServiceDummyjson: async():Promise<ICommentsDummyjson[]> =>{
      return await fetch(dummyjsonUrl.comments.allComments)
          .then(value => value.json())
   }
}
