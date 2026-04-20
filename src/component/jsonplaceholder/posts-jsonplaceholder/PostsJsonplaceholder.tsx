import {useEffect, useState} from "react";
import type {IPostsJsonplaceholder} from "../../../models/jsonplaceholder/IPostsJsonplaceholder.ts";
import {postsServiceJsonplaceholder} from "../../../service/jsonplaceholder/api-service-jsonplaceholder.ts";
import {PostJsonplaceholder} from "../post-jsonplaceholder/PostJsonplaceholder.tsx";

export const PostsJsonplaceholder = () => {
    const [posts, setPosts] =useState<IPostsJsonplaceholder[]>([]);
    useEffect(() => {
        postsServiceJsonplaceholder.getPostsServiceJsonplaceholder().then((allPosts) =>{
            setPosts(allPosts);
        })
    }, []);
    return (
        <>
            {
                posts.map(post =><PostJsonplaceholder key={post.id} item={post}/>)
            }
        </>
    );
};
