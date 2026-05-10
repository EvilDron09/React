import type {IPostsComponent} from "../../models/posts-models/IPostsComponent.ts";
import {useNavigate} from "react-router-dom";

export const PostsComponent = ({item}: IPostsComponent) => {
    const navigate = useNavigate();
    const toGoPost = (id:number) =>{
        navigate(`${id}`)
    }
    return (
        <div>
            <p>{item.id} {item.title}</p>
            <button onClick={() => toGoPost(item.id)}>go to post</button>
        </div>
    );
};
