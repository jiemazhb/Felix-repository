import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todosSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {

      dispatch(addTodo({ title, completed: false }));
      
      setTitle('');
    }
  };

  function handleChange(e){
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => handleChange(e)} placeholder="Add a new todo" />
      
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
