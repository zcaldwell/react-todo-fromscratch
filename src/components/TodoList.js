import React from 'react';

export default function TodoList({ todo, handleClick, handleDelete }) {
  return (
    <div className="todo-list">
      {todo.map((tod) => (
        <ul key={tod.id}>
          <input
            type="checkbox"
            value={tod.is_complete}
            checked={tod.is_complete}
            onChange={() => {
              handleClick(tod);
            }}
          ></input>
          <li key={tod.id}>{tod.task}</li>
          <button type="button" onClick={() => handleDelete(tod.id)}>
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
}
