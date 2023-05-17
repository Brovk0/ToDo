import { useState } from "react";
import style from "./todo.module.css";


 
export function Todo({ todo, }) {

    return (

        <div className={style.todo}>
            <div className={style.nameProject}>
                <p>Название проекта: </p>
                <h2>{todo.projectName}</h2>
            </div>
            <div className={style.nameProject}>
                <p>Название задачи: </p>
                <h3 >{todo.textName}</h3>
            </div>
            <div className={style.date}>
                <p>Дата выполнения: {todo.dateTodo}</p>
                <p>Время выполнения: {todo.timeTodo}</p>
            </div>
            <p className={style.text}>{todo.text}</p>
            <div className={style.footerTodo}>
                <p className={style.teg}>{todo.tegTodo}</p>
                <p className={style.name}>Важность задачи: {todo.importanceTodo}</p>
            </div>
        </div>

    );
}

