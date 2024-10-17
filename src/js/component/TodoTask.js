import React from "react";

const TodoTask = ({ value, index, removeTodo }) => (
  <li className="todo-task">
    {value}
    <button className="btn-delete" onClick={() => removeTodo(index)}>
      ⨉
    </button>
  </li>
);

export default TodoTask;
