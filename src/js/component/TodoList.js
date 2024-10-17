import React from "react";
import TodoTask from "./TodoTask";

const TodoList = ({ todos, removeTodo }) => (
  <ul className="todo-list">
    {todos.length === 0 ? (
      <li className="no-tasks">No hay tareas, añadir tareas</li>
    ) : (
      todos.map((value, index) => (
        <TodoTask
          key={index}
          value={value}
          index={index}
          removeTodo={removeTodo}
        />
      ))
    )}
  </ul>
);

export default TodoList;
