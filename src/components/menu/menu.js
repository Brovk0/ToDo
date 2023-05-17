import "./style.scss";
import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? " active" : "")}
          >
            Все задачи
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/AddTodo"
            className={({ isActive }) => (isActive ? " active" : "")}
          >
            Создать задачу
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/DeleteTodo"
            className={({ isActive }) => (isActive ? " active" : "")}
          >
            Удалить задачу
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
