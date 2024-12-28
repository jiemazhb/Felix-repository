import React, { useEffect, useContext, useState } from "react";
import TodoContext, { TodoProvider } from "./TodoContext";

export default function TodoList() {
  const { todos, fetchTodos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => updateTodo(todo.id, { ...todo, completed: !todo.completed })}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



