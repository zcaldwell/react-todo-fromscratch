import { client, checkError } from './client.js';

export async function fetchTodos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function addTodo(todo) {
  const resp = await client.from('todos').insert(todo);
  return checkError(resp);
}
