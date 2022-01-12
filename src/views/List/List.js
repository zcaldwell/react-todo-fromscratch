import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTodos, toggleCompleted } from '../../services/todos';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import { addTodo, deleteTodo } from '../../services/todos';

export default function List() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodo(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const handleClick = async (tod) => {
    console.log(tod);
    await toggleCompleted(tod.id, !tod.is_complete);
    const resp = await fetchTodos();
    setTodo(resp);
  };

  const handleDelete = async (tod) => {
    await deleteTodo(tod.id);
    const resp = await fetchTodos();
    setTodo(resp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const [resp] = await addTodo(task);
      setTodo((prevState) => [...prevState, resp]);
      alert('Task Added!');
    } catch {
      alert('Task Failed To Add!"');
    }
  };

  return (
    <div>
      <TodoList todo={todo} handleClick={handleClick} handleDelete={handleDelete} />
      <TodoForm {...todo} handleSubmit={handleSubmit} setTask={setTask} />
    </div>
  );
}
