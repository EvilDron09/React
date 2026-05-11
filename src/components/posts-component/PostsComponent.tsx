import type {IPost} from "../../models/IPost.ts";

interface IPostsComponent{
    post:IPost;
}

export const PostsComponent = ({post}:IPostsComponent) => {
    return (
        <div>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};
