import {useParams} from "react-router-dom";
import {PostsComponent} from "../component/posts/PostsComponent.tsx";


export const PostsPage = () => {

    const {userId} = useParams();


    return (
        <div>
            {
                userId && <PostsComponent  userId={userId}/>
            }
        </div>
    );
};
