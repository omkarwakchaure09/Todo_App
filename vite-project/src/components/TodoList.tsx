import { JSX } from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEditInit: (todo: Todo) => void;
}

const TodoList = ({
  todos,
  onToggle,
  onDelete,
  onEditInit,
}: Props): JSX.Element => {
  if (todos.length === 0)
    return <p className="text-center text-gray-500"> No tasks to show.</p>;
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEditInit={onEditInit}
        />
      ))}
    </div>
  );
};

export default TodoList;
