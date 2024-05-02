import React from "react";
import "./App.css";

function TodoList() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div>
      <input className='AddTextBar'  type="text" placeholder="Add a Task..." />
      <button className="AddButton...">Add</button>
      </div>
    </div>
  );
}

export default TodoList;
