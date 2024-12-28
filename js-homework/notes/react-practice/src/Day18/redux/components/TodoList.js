import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../slices/todosSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleToggle = (todo) => {
    dispatch(toggleTodo(todo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => handleToggle(todo)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.title}
          </span>
          
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
