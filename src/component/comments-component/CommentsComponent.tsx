import type {FC} from "react";
import type {IComment} from "../../model/IComment.ts";
import './CommentsComponentStyle.css'

type CommentType ={
    item:IComment;
}

export const CommentsComponent:FC<CommentType> = ({item:{postId,id, name, email, body}}) => {
    return (
        <div>
            <p className={'idComment'}>Post ID:{postId}, ID:{id}</p>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <p className={'bodyComment'}>{body}</p>
        </div>
    );
};
