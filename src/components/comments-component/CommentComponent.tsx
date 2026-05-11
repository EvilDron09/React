import type {IComment} from "../../models/IComment.ts";

interface ICommentComponent {
    comment:IComment;
}

export const CommentComponent = ({comment}:ICommentComponent) => {
    return (
        <div>
            <h3>{comment.id} {comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    );
};
