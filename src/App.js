import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllTodo from "./components/all todo/AllTodo";
import DeleteTodo from "./components/delete todo/DeleteTodo";
import AddTodo from "./components/add todo/AddTodo";
import Menu from "./components/menu/menu";
import Modal from "./modal/modal";
import { useEffect } from "react";

function App() {

    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route path="/" element={<AllTodo />} />
                <Route path="/AddTodo" element={<AddTodo />} />
                <Route path="/DeleteTodo" element={<DeleteTodo />} />
                <Route path="*" element={<div> Page not found 404 </div>} />
            </Routes>

            <Modal />
        </div>
    );
}

export default App;
