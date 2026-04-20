import {useEffect, useState} from "react";
import type {IPostsDummyjson} from "../../../models/dummyjson/IPostsDummyjson.ts";
import {postsServiceDummyjson} from "../../../service/dummyjson/api-service-dummyjson.ts";
import {PostDummyjson} from "../post-dummyjson/PostDummyjson.tsx";

export const PostsDummyjson = () => {
    const [posts, setPosts] = useState<IPostsDummyjson[]>([]);
    useEffect(() => {
        postsServiceDummyjson.getPostsServiceDummyjson().then((allPosts)=>{
            setPosts(allPosts);
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
