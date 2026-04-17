import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../model/IPost.ts";
import {postsService} from "../../service/api-service.ts";

type PostsType ={
    userId:string
}

export const PostsComponent :FC<PostsType> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if(userId){
            console.log(userId,'exists');
            postsService.getAllPostsOfUserById(+userId).then(value => {
                    console.log(value);
                    setPosts(value);
                }
            )
        }
    }, [userId]);

    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};
