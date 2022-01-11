import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTodos } from '../../services/todos';
import TodoList from '../../components/TodoList';

export default function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodos(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}
