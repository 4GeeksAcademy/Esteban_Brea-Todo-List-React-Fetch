import React from "react";

const TodoCounter = ({ todos }) =>
  todos.length > 0 && (
    <p className="counter">{`${todos.length} item${
      todos.length > 1 ? "s" : ""
    } left`}</p>
  );

export default TodoCounter;
