import { JSX } from "react";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEditInit: (todo: Todo) => void;
}
const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  onEditInit,
}: Props): JSX.Element => {
  return (
    <div className="flex justify-between items-center p-2 border rounded mb-2">
      <div
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer flex-grow${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </div>
      <div className="space-x-2">
        <button
          onClick={() => onEditInit(todo)}
          className="text-blue-500 cursor-pointer ml-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
