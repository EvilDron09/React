import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";

type PostType ={
    item:IPost
}


export const PostsComponent: FC<PostType> = ({item}) => {
    return (
        <div>
            <p>ID:{item.id}, User ID{item.userId}</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <ul>
                {
                item.tags.map(tag =>(
                    <li key={item.id}>{tag}</li>
                ))
                }
            </ul>
            <p>{item.views}</p>
            <p>Likes:{item.reactions.likes}, Dislikes:{item.reactions.dislikes}</p>
        </div>
    );
};
