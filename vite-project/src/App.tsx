import { JSX, useState } from "react";
import TodoList from "./components/TodoList";
import "./index.css";
import { Todo } from "./types";

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
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
  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-4 border shadow-lg rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <div className="flex mb-4">
          <input
            type={"text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task"
            className="flex-grow border px-2 py-1 mr-2 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </>
  );
};

export default App;
