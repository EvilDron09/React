import {useEffect, useState} from "react";
import {commentsServiceDummyjson} from "../../../service/dummyjson/api-service-dummyjson.ts";
import {CommentDummyjson} from "../comment-dummyjson/CommentDummyjson.tsx";
import type {ICommentsDummyjson} from "../../../models/dummyjson/ICommentsDummyjson.ts";
import type {ICommentsResponse} from "../../../models/dummyjson/ResponseElement/ICommentsResponse.ts";


export const CommentsDummyjson = () => {
    const [comments, setComments] = useState<ICommentsDummyjson[]>([]);
    useEffect(() => {
        commentsServiceDummyjson.getCommentsServiceDummyjson().then(({comments}: ICommentsResponse)=>{
            setComments(comments)
        })
    }, []);
    return (
        <>
            {
                comments.map(comment => <CommentDummyjson key={comment.id} item={comment}/>)
            }
        </>
    );
};
