import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {postSliceAction} from "../redux/postSlice/postSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {PostComponent} from "../components/post-component/PostComponent.tsx";

export const PostPage = () => {

    const {id} = useParams();
    const {post,loadState} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id)dispatch(postSliceAction.loadPost(id))
    }, [id]);
    return (
        <>
            {!loadState && <div>Loading...</div>}
            {post && <div><PostComponent item={post}/></div>}
        </>
    );
};
