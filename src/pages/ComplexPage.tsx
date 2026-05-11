import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userAction} from "../redux/slice/userSlice.ts";
import {postAction} from "../redux/slice/postSlice.ts";
import {commentsAction} from "../redux/slice/commentSlice.ts";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";
import {CommentComponent} from "../components/comments-component/CommentComponent.tsx";



export const ComplexPage = () => {
const {userSlice:{users}, postSlice:{posts}, commentSlice:{comments}} =useAppSelector(state => state);
const dispatch = useAppDispatch();
    useEffect(() => {
        if(!users.length){
            dispatch(userAction.loadUsers());
        }
        if(!posts.length){
            dispatch(postAction.loadPosts());
        }
        if(!comments.length){
            dispatch(commentsAction.loadComments())
        }
    }, []);
    return (
        <>
            {
                users.map(user => <UsersComponent key={user.id} user={user}/>)
            }
            {
                posts.map(post => <PostsComponent key={post.id} post={post}/>)
            }
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </>
    );
};
