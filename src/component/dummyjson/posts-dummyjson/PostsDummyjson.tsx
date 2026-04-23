import {useEffect, useState} from "react";
import type {IPostsDummyjson} from "../../../models/dummyjson/IPostsDummyjson.ts";
import {postsServiceDummyjson} from "../../../service/dummyjson/api-service-dummyjson.ts";
import {PostDummyjson} from "../post-dummyjson/PostDummyjson.tsx";
import type {IPostsResponse} from "../../../models/dummyjson/ResponseElement/IPostsResponse.ts";

export const PostsDummyjson = () => {
    const [posts, setPosts] = useState<IPostsDummyjson[]>([]);
    useEffect(() => {
        postsServiceDummyjson.getPostsServiceDummyjson().then(({posts}:IPostsResponse)=>{
            setPosts(posts);
        })
    }, []);
    return (
        <>
            {
                posts.map(post =><PostDummyjson key={post.id} item={post}/>)
            }
        </>
    );
};
