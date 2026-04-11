import {type FC} from "react";
import type {ITodo} from "../../module/ITodo.ts";
import './TodoComponentStyle.css'

type TodoComponentType = {
    item:ITodo
}

export const TodoComponent:FC<TodoComponentType> = ({item:{id, userId, title, completed}}) => {

    return (
        <div>
            <p>ID: {id}, User ID: {userId}</p>
            <p>Title: {title}</p>
            <p>Завершено: {completed.toString()}</p>
        </div>
    );
};
