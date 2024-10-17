import React from "react";

const TodoInput = ({ todo, setTodo, keyDownEvent }) => (
  <div className="todo-input-container">
    <input
      type="text"
      className="todo-input"
      placeholder="What needs to be done?"
      onChange={(e) => setTodo(e.target.value)}
      value={todo} //componente controlado determinado por el estado: Este valor se establece en todo, es decir que el valor del input tambien varia en base a el.
      onKeyDown={keyDownEvent}
    />
  </div>
);

export default TodoInput;
