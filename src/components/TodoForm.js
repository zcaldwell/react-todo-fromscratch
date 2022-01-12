import React from 'react';

export default function TodoForm({ task, addTodo, handleSubmit }) {
  return (
    <div className="form-control">
      <form>
        <label>Todo</label>
        <input
          type="text"
          placeolder="Add New Task"
          value={task}
          onChange={(e) => {
            addTodo('task', e.target.value);
          }}
        ></input>
        <div className="submit-button">
          <button onClick={handleSubmit}>Add Task</button>
        </div>
      </form>
    </div>
  );
}
