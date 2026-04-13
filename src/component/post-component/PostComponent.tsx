import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {getPost} from "../../servise/api-service.ts";
import {PostsComponent} from "../posts-component/PostsComponent.tsx";
import './PostComponentStyle.css'

export const PostComponent = () => {

    const [post, setPost] = useState<IPost[]>([])
    useEffect(() => {
        getPost().then(value =>{setPost(value)})
    }, []);
    return (
        <section>
            {
                post.map(post => <PostsComponent item={post} key={post.id}/>)
            }
        </section>
    );
};
