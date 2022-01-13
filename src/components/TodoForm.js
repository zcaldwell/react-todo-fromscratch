import React from 'react';

export default function TodoForm({ setTask, handleSubmit }) {
  return (
    <div className="form-control">
      <form>
        <input
          type="text"
          placeholder="Add New Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <div className="submit-button">
          <button onClick={handleSubmit}>Add Task</button>
        </div>
      </form>
    </div>
  );
}
