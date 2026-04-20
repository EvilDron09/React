import type {FC} from "react";
import type {ICommentsJsonplaceholder} from "../../../models/jsonplaceholder/ICommentsJsonplaceholder.ts";

 type CommentJsonplaceholderType = {
     item: ICommentsJsonplaceholder
 }

export const CommentJsonplaceholder:FC<CommentJsonplaceholderType> = ({item}) => {
    return (
        <div>
            <h3>{item.id}, {item.postId}</h3>
            <h2>{item.name}</h2>
            <p>{item.body}</p>
            <p>{item.email}</p>
        </div>
    );
};
