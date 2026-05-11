import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postAction} from "../redux/slice/postSlice.ts";
import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";

export const PostsPage = () => {

    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);

    return (
        <section>
            {
                posts.map(post => <PostsComponent key={post.id} post={post}/>)
            }
        </section>
    );
};
