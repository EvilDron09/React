import {useEffect, useState} from "react";
import type {IComment} from "../../model/IComment.ts";
import {getComment} from "../../service/comment-api-service.ts";
import {CommentsComponent} from "../comments-component/CommentsComponent.tsx";
import './CommentComponentStyle.css'

export const CommentComponent = () => {
    const [comment, setComment] = useState<IComment[]>([]);
    useEffect(() => {
        getComment().then(value => {setComment(value)})
    }, []);

    return (
        <section>
            {
                comment.map(comment=><CommentsComponent item={comment} key={comment.id}/>)
            }
        </section>
    );
};
