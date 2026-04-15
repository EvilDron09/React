import {useEffect, useState} from "react";
import type {IComment} from "../../module/IComment.ts";
import {getComment} from "../../service/api-service.ts";
import {Comments} from "../comments-component/Comments.tsx";
import './CommentStyle.css'

export const Comment = () => {
    const [comment, setComment] = useState<IComment[]>([]);
    useEffect(() => {
        getComment().then(value => {setComment(value)})
    }, []);
    return (
        <section>
            {
                comment.map(comment =><Comments item={comment} key={comment.id}/>)
            }
        </section>
    );
};
