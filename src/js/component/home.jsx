import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoCounter from "./TodoCounter";
import myImg from "../../img/klipartz.com.png";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/todo/users/estebanbrea00")
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        data && data.todos ? setTodos(data.todos) : null;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }, []);

  const updateTasks = (newTask) => {
    fetch("https://playground.4geeks.com/todo/todos/estebanbrea00", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const updatedTodos = [...todos, data];
        setTodos(updatedTodos);
      })
      .catch((error) => console.log(error));
  };

  const keyDownEvent = (e) => {
    e.key === "Enter" && e.target.value.trim() !== ""
      ? (() => {
          const newTask = { label: e.target.value, is_done: false };
          setTodos([...todos, newTask]);
          updateTasks(newTask);
          e.target.value = "";
        })() //IIFE(Immediately invoked function expression) para que se ejecute la arrow function inmediatamente de cumplirse la condicion
      : null;
  };

  const removeTodo = (index) => {
    const todoToDelete = todos[index];

    if (!todoToDelete?.id) {
      //Comprobando si todoToDelete y su id existen.
      return console.log("La tarea no tiene un ID válido para eliminar.");
    }

    fetch(`https://playground.4geeks.com/todo/todos/${todoToDelete.id}`, {
      method: "DELETE",
    })
      .then((resp) =>
        resp.ok
          ? setTodos(todos.filter((_, i) => i !== index))
          : console.log("Error al eliminar la tarea.")
      )
      .catch((error) => console.log(error));
  };

  return (
    <>
      <img src={myImg} className="img-light" alt="todo" />
      <h1 className="title">todos</h1>
      <div className="container">
        <div className="layer layerOne"></div>
        <div className="layer layerTwo"></div>
        <TodoInput keyDownEvent={keyDownEvent} />
        <TodoList todos={todos} removeTodo={removeTodo} />
        <TodoCounter todos={todos} />
      </div>
    </>
  );
};

export default Home;
