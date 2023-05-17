import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import style from "./AddTodo.module.css";
import React from "react";
import { InfoContext } from "../../contexts/infoContext";
import { ModalContext } from "../../modalContext/infoContext";

export default function AddTodo() {
  const textareaName = useRef(null);

  useEffect(() => {
    textareaName.current.focus();
  }, []);

  const { addTodo } = useContext(InfoContext);

  const { showModal } = useContext(ModalContext);
  // const { isSearch } = useContext(ModalContext);

  const [infoTodo, setinfoTodo] = useState("");
  const [infoTodoName, setinfoTodoName] = useState("");
  const [infoProjectName, setinfoProjectName] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [tag, settag] = useState("");
  const [importance, setimportance] = useState("Важно");

  function handlerChange({ target: { value } }) {
    setinfoTodo(value);
  }

  function handlerChangeName({ target: { value } }) {
    setinfoTodoName(value);
  }

  function handlerChangeDate({ target: { value } }) {
    setdate(value);
  }

  function handlerChangeTime({ target: { value } }) {
    settime(value);
  }

  function handlerChangeTag({ target: { value } }) {
    settag(value);
  }

  function handlerChangeImportance({ target: { value } }) {
    setimportance(value);
  }

  function handlerChangeProjectName({ target: { value } }) {
    setinfoProjectName(value);
  }

  function handlerClick() {
    addTodo(
      infoTodo,
      infoTodoName,
      date,
      time,
      tag,
      importance,
      infoProjectName
    );
    // isSearch({
    //   infoTodo,
    //   infoTodoName,
    //   date,
    //   time,
    //   tag,
    //   importance,
    //   infoProjectName,
    // });
    setinfoTodo("");
    showModal("add");
    setinfoProjectName("");
    setimportance("Важно");
    settag("");
    settime("");
    setdate("");
    setinfoTodoName("");
  }

  return (
    <div className={style.allTodo}>
      <div className={style.todo}>
        <label className={style.taskName}>
          {" "}
          Название проекта:{" "}
          <input
            onChange={handlerChangeProjectName}
            type="text"
            value={infoProjectName}
          />{" "}
        </label>{" "}
        <label className={style.taskName}>
          {" "}
          Название задачи:{" "}
          <input
            onChange={handlerChangeName}
            type="text"
            value={infoTodoName}
          />{" "}
        </label>{" "}
        <label htmlFor="start">
          {" "}
          Дата выполнения:{" "}
          <input
            onChange={handlerChangeDate}
            type="date"
            value={date}
            id="start"
            name="trip-start"
            min="2022-01-01"
            max="2023-12-31"
          />
        </label>{" "}
        <label htmlFor="appt">
          {" "}
          Время выполнения:{" "}
          <input
            onChange={handlerChangeTime}
            type="time"
            value={time}
            id="appt"
            name="appt"
            min="00:00"
            max="23:59"
            required
          />{" "}
        </label>{" "}
        <textarea
          onChange={handlerChange}
          value={infoTodo}
          ref={textareaName}
          className={style.textarea}
        />{" "}
        <label className={style.tags}>
          {" "}
          Теги: <input
            onChange={handlerChangeTag}
            type="text"
            value={tag}
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Важность задачи:{" "}
          <select onChange={handlerChangeImportance} name="importance">
            value = {importance} <option> Важно </option>{" "}
            <option> Не важно </option> <option> Очень важно </option>{" "}
          </select>{" "}
        </label>{" "}
        <button value="create" onClick={handlerClick} className={style.create}>
          {" "}
          Создать задачу{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
