import { useContext } from "react";
import { InfoContext } from "../../contexts/infoContext";
import { ModalContext } from "../../modalContext/infoContext";
import { Todo } from "../todo/todo";
import style from "./DeleteTodo.module.css";

export default function DeleteTodo() {
    const { todos, delTodo } = useContext(InfoContext);
    const { showModal } = useContext(ModalContext);

    function handlerClick(id) {
        delTodo(id);
        showModal("del");
    }

    return (
        <div className={style.delTodo}>
            <div className={style.combined}>
                {!!todos?.length && todos
                    .map((todo) => (
                        <div key={todo.id}>
                            <Todo todo={todo} />
                            <button onClick={() => handlerClick(todo.id)}>Delete</button>
                        </div>
                    ))} 
            </div>
        </div>
    );
}
