
import { JSX } from "react";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
const TodoItem = ({ todo, onToggle, onDelete }: Props): JSX.Element => {
  return (
    <div className="flex justify-between items-center p-2 border rounded">
      <div
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </div>
      <button onClick={() => onDelete(todo.id)} className="text-red-500 cursor-pointer">Delete</button>
    </div>
  );
};
export default TodoItem;
