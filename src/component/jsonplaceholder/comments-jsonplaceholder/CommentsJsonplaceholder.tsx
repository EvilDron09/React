import {useEffect, useState} from "react";
import type {ICommentsJsonplaceholder} from "../../../models/jsonplaceholder/ICommentsJsonplaceholder.ts";
import {commentsServiceJsonplaceholder} from "../../../service/jsonplaceholder/api-service-jsonplaceholder.ts";
import {CommentJsonplaceholder} from "../comment-jsonplaceholder/CommentJsonplaceholder.tsx";

export const CommentsJsonplaceholder = () => {
    const [comments, setComments] = useState<ICommentsJsonplaceholder[]>([]);
    useEffect(() => {
        commentsServiceJsonplaceholder.getCommentsServiceJsonplaceholder().then((allComments)=>{
            setComments(allComments);
        })
    }, []);
    return (
        <>
            {
                comments.map(comment => <CommentJsonplaceholder key={comment.id} item={comment}/>)
            }
        </>
    );
};
