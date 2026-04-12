import './PostComponentStyle.css'
import {useEffect, useState} from "react";
import type {IPost} from "../../models/PostModels.ts";
import {getPost} from "../../service/post-api-service.ts";
import {PostsComponent} from "../posts-component/PostsComponent.tsx";

export const PostComponent = () => {

    const [post, setPost] = useState<IPost[]>([]);
    useEffect(() => {
        getPost().then(value => {setPost(value)})
    }, []);

    return (
        <div className={'postDiv'}>
            {
                post.map(post =><PostsComponent item={post} key={post.id}/>)
            }
        </div>
    );
};
