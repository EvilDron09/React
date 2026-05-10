import type {IPostsComponent} from "../../models/posts-models/IPostsComponent.ts";

export const PostComponent = ({item}:IPostsComponent) => {
    return (
        <div>
            <h2>{item.id} {item.title}</h2>
            <p>{item.body}</p>
        </div>
    );
};
