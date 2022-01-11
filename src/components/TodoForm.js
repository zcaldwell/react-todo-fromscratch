import React from 'react';

export default function Todo({ todo, updateTodo }) {
  return (
    <div className="form-control">
      <form>
        <label>Todo</label>
        <input
          type="text"
          placeholder="Add New Task"
          value={todo}
          onChange={(e) => {
            updateTodo('todo', e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}
