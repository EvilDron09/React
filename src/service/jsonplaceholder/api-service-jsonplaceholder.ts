import type {IUsersJsonplaceholder} from "../../models/jsonplaceholder/IUsersJsonplaceholder.ts";
import {jsonplaceholderUrl} from "../../constant/urls.ts";
import type {IPostsJsonplaceholder} from "../../models/jsonplaceholder/IPostsJsonplaceholder.ts";
import type {ICommentsJsonplaceholder} from "../../models/jsonplaceholder/ICommentsJsonplaceholder.ts";

export const usersServiceJsonplaceholder = {
    getUsersJsonplaceholder: async():Promise<IUsersJsonplaceholder[]> =>{
        return await fetch(jsonplaceholderUrl.users.allUsers)
            .then(value => value.json())
    }
}
export const postsServiceJsonplaceholder = {
    getPostsServiceJsonplaceholder: async():Promise<IPostsJsonplaceholder[]> =>{
        return await fetch(jsonplaceholderUrl.posts.allPosts)
            .then(value => value.json())
    }
}
export const commentsServiceJsonplaceholder = {
    getCommentsServiceJsonplaceholder: async (): Promise<ICommentsJsonplaceholder[]> => {
        return await fetch(jsonplaceholderUrl.comments.allComments)
            .then(value => value.json())
    }
}
