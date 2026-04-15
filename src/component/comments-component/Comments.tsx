import type {FC} from "react";
import type {IComment} from "../../module/IComment.ts";
import './CommentsStyle.css'

type CommentType ={
    item:IComment
}

export const Comments:FC<CommentType> = ({item}) => {
    return (
        <div>
            <p>ID:{item.id}, Post ID: {item.postId}</p>
            <h2>{item.user.id}, {item.user.username}, {item.user.fullName}</h2>
            <p>{item.body}</p>
            <p>Likes:{item.likes}</p>
        </div>
    );
};
