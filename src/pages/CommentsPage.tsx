import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {commentsAction} from "../redux/slice/commentSlice.ts";
import {CommentComponent} from "../components/comments-component/CommentComponent.tsx";

export const CommentsPage = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsAction.loadComments())
    }, []);
    return (
        <section>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </section>
    );
};
