import type {FC} from "react";
import type {IPostsDummyjson} from "../../../models/dummyjson/IPostsDummyjson.ts";

type PostDummyjsonType ={
    item:IPostsDummyjson
}


export const PostDummyjson:FC<PostDummyjsonType> = ({item}) => {
    return (
        <div>
            <h3>{item.id}, {item.userId}</h3>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <p>{item.tags.map((tag,index) =><span key={index}>{tag}</span>)}</p>
            <p>{item.reactions.dislikes},{item.reactions.likes}</p>
            <p>{item.views}</p>
        </div>
    );
};
