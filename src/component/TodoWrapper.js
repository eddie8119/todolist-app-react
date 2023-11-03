import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map(
        (
          todo //不要包{}
        ) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map(
        (
          todo //不要包{}
        ) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} editTask={editTask} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
