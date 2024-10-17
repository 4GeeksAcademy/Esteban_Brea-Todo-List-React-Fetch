import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoCounter from "./TodoCounter";
import myImg from "../../img/klipartz.com.png";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const keyDownEvent = (e) =>
    e.key === "Enter" && todo.trim() !== ""
      ? (setTodos([...todos, todo]), setTodo("")) //setTodo("") restablece el valor de la variable todo a una cadena vacia
      : null;

  const removeTodo = (index) => {
    setTodos(todos.filter((value, i) => i !== index));
  };

  return (
    <>
      <img src={myImg} className="img-light" />
      <h1 className="title">todos</h1>
      <div className="container">
        <div className="layer layerOne"></div>
        <div className="layer layerTwo"></div>
        <TodoInput todo={todo} setTodo={setTodo} keyDownEvent={keyDownEvent} />
        <TodoList todos={todos} removeTodo={removeTodo} />
        <TodoCounter todos={todos} />
      </div>
    </>
  );
};

export default Home;
