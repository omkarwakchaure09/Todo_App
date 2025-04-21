import { JSX, useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./index.css";
import { Todo } from "./types";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [editText, setEditText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setEditText("");
  };
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEditInit = (todo: Todo) => {
    setEditText(todo.text);
    setIsEditing(true);
    setEditId(todo.id);
  };

  const updateTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditText("");
    setIsEditing(false);
    setEditId(null);
  };

  const getFilteredTodos = (): Todo[] => {
    if (filter === "Active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-4 border shadow-lg rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Advanced Todo App
        </h1>
        <TodoForm
          onAdd={addTodo}
          editText={editText}
          setEditText={setEditText}
          isEditing={isEditing}
          onUpdate={updateTodo}
        />
        <TodoList
          todos={getFilteredTodos()}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEditInit={handleEditInit}
        />
        <Filter current={filter} setFilter={setFilter} />
      </div>
    </>
  );
};

export default App;
