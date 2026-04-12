import './PostsComponentStyle.css'
import type {FC} from "react";
import type {IPost} from "../../models/PostModels.ts";

type PostsComponentType ={
    item:IPost
}

export const PostsComponent:FC<PostsComponentType> = ({item:{userId, id, title, body}}) => {
    return (
        <div>
            <p>User ID: {userId}, ID: {id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};
