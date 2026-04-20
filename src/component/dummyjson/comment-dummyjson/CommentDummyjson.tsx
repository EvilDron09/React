import type {FC} from "react";
import type {ICommentsDummyjson} from "../../../models/dummyjson/ICommentsDummyjson.ts";

type CommentDummyjsonType = {
    item:ICommentsDummyjson
}

export const CommentDummyjson:FC<CommentDummyjsonType> = ({item}) => {
    return (
        <div>
            <h3>{item.id},{item.postId}</h3>
            <h2>{item.user.username}, {item.user.fullName}</h2>
            <p>{item.body}</p>
            <p>{item.likes}</p>
        </div>
    );
};
