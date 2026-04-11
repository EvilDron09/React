import {useEffect, useState} from "react";
import type {ITodo} from "../../module/ITodo.ts";
import {getTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import './TodoComponentsStyle.css'

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() =>{
        getTodos().then((value) =>{setTodos(value)});
    },[])
    return (
        <div className={'todoDiv'}>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};
