import React, { createContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload };
    case "ADD_TODO":
      console.log(state);

      return { ...state, todos: [...state.todos, action.payload] };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Fetch todos
  const fetchTodos = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch("http://localhost:3001/todos");
      if (!response.ok) throw new Error("Failed to fetch todos");
      const data = await response.json();
      dispatch({ type: "FETCH_TODOS", payload: data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  // Add a todo
  const addTodo = async (text) => {
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, completed: false }),
      });
      if (!response.ok) throw new Error("Failed to add todo");
      const data = await response.json();
      dispatch({ type: "ADD_TODO", payload: data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  // Update a todo
  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });
      if (!response.ok) throw new Error("Failed to update todo");
      const data = await response.json();
      dispatch({ type: "UPDATE_TODO", payload: data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete todo");
      dispatch({ type: "DELETE_TODO", payload: id });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  return (
    <TodoContext.Provider value={{ ...state, fetchTodos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
