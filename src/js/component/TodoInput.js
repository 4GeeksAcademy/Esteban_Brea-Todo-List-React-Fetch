import React from "react";

const TodoInput = ({ keyDownEvent }) => (
  <div className="todo-input-container">
    <input
      type="text"
      className="todo-input"
      placeholder="What needs to be done?"
      onKeyDown={keyDownEvent}
    />
  </div>
);

export default TodoInput;
