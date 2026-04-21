import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/api-all-service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel &{posts: IPost[]}>('/posts')
            .then(({posts}) => setPosts(posts))
    }, []);
    return (
        <>
            {
                posts.map((post:IPost) =><PostComponent key={post.id} post={post}/>)
            }
        </>
    );
};
