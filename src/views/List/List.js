import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTodos } from '../../services/todos';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import { addTodo } from '../../services/todos';

export default function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTodo(todos);
      alert('Task Added!');
    } catch {
      alert('Task Failed To Add!"');
    }
  };

  return (
    <div>
      <TodoList todos={todos} />
      <TodoForm {...todos} handleSubmit={handleSubmit} />
    </div>
  );
}
