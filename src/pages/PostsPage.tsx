import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceAction} from "../redux/postSlice/postSlice.ts";
import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";
import {useParams} from "react-router-dom";

export const PostsPage = () => {
    const {userId} = useParams();
    const {posts,loadState} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(userId)dispatch(postSliceAction.loadPosts(userId))
    }, [userId]);

    return (
        <>
            {!loadState && <div>Loading...</div>}
            {
                posts && posts.map(post => <PostsComponent key={post.id} item={post}/>)
            }
        </>
    );
};
