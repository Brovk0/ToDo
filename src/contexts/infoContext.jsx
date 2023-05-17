import React, { useState } from "react";

export const InfoContext = React.createContext(null);

export default function InfoContextProvider({ children }) {
  const [info, setinfo] = useState(null);

  const [isSearch, setisSearch] = useState(null);

  const [todos, settodos] = useState([]);

  function addTodo(
    todo,
    infoTodoName,
    date,
    time,
    teg,
    importance,
    infoProjectName
  ) {
    if (todo.length) {
      settodos([
        ...todos,
        {
          id: Date.now(),
          text: todo,
          projectName: infoProjectName,
          textName: infoTodoName,
          dateTodo: date,
          timeTodo: time,
          tegTodo: teg,
          importanceTodo: importance,
        },
      ]);
    }
  }

  function delTodo(id) {
    if (id) {
      settodos(todos.filter((todo) => todo.id !== id));
    }
  }

  return (
    <InfoContext.Provider
      value={{
        info,
        setinfo,
        todos,
        settodos,
        addTodo,
        delTodo,
        setisSearch,
        isSearch,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}
