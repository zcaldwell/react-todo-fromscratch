import React from 'react';

export default function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li key={todo.id}>{todo.task}</li>
        </ul>
      ))}
      <p> hi </p>
    </div>
  );
}
