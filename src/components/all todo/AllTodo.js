import { useContext, useState, useEffect } from "react";
import { InfoContext } from "../../contexts/infoContext";
import { Todo } from "../todo/todo";
import style from "./AllTodo.module.css";

export default function AllTodo() {
  const { todos, isSearch } = useContext(InfoContext);
  const [isTodos, setisTodos] = useState(todos);
  const [search, setsearch] = useState("");
  let [searchType, setsearchType] = useState("");

  function handlerChangeSearch({ target: { value } }) {
    setsearch(value);
  }

  function handlerChangeSearchType({ target: { value } }) {
    setsearchType(value);
  }

  const [array, setarray] = useState("");
  const [string, setstring] = useState("");

  function handlerClick() {
    _isSearch();
  }

  function _isSearch() {
    console.log("cxgcxvbnn");
  }

  return (
    <>
      <div className={style.allTodo}>
        <div className={style.searchDiv}>
          <input
            className={style.searchCllas}
            onChange={handlerChangeSearch}
            type="text"
            value={search}
          />{" "}
          <select onChange={handlerChangeSearchType} name="importance">
            value = {searchType} <option> По названию задачи </option>{" "}
            <option> По названию проекта </option> <option> По тегам </option>{" "}
            <option> По описанию задачи </option>{" "}
            <option> По приоритету </option>{" "}
          </select>{" "}
          <button value="" onClick={handlerClick} className={style.create}>
            {" "}
            Поиск{" "}
          </button>{" "}
        </div>{" "}
        {isTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}{" "}
      </div>{" "}
    </>
  );
}
