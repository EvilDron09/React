import type {FC} from "react";
import type {IPostsJsonplaceholder} from "../../../models/jsonplaceholder/IPostsJsonplaceholder.ts";

type PostJsonplaceholderType ={
    item:IPostsJsonplaceholder
}

export const PostJsonplaceholder:FC<PostJsonplaceholderType> = ({item}) => {
    return (
        <div>
            <h3>{item.id}, {item.userId}</h3>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>
    );
};
