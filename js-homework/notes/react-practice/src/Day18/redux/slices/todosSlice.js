import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3001/todos';

// Fetch all todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return await response.json();
});

// Add a new todo
export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error('Failed to add todo');
  }
  return await response.json();
});

// Delete a todo
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
  return id;
});

// Toggle a todo's completion status
export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (todo) => {
  const updatedTodo = { ...todo, completed: !todo.completed };
  const response = await fetch(`${API_URL}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTodo),
  });
  if (!response.ok) {
    throw new Error('Failed to update todo');
  }
  return await response.json();
});

// Define the todos slice
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => action.payload)
      .addCase(addTodo.fulfilled, (state, action) => [...state, action.payload])
      .addCase(deleteTodo.fulfilled, (state, action) =>
        state.filter((todo) => todo.id !== action.payload)
      )
      .addCase(toggleTodo.fulfilled, (state, action) =>
        state.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        )
      );
  },
});

export default todosSlice.reducer;




