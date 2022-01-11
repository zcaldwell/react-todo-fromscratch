import React from 'react';

export default function Todo({ todos, addTodo }) {
  return (
    <div className="form-control">
      <form>
        <label>Todo</label>
        <input
          type="text"
          placeolder="Add New Task"
          value={todos}
          onChange={(e) => {
            addTodo('todos', e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}
