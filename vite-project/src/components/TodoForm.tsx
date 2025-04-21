import { JSX } from "react";

interface Props {
  onAdd: (text: string) => void;
  editText: string;
  setEditText: (text: string) => void;
  isEditing: boolean;
  onUpdate: () => void;
}

const TodoForm = ({
  onAdd,
  editText,
  setEditText,
  isEditing,
  onUpdate,
}: Props): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editText.trim()) return;
    isEditing ? onUpdate() : onAdd(editText);
    setEditText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex mb-4 gap-2">
      <input
        type={"text"}
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        placeholder="Enter a task"
        className="flex-grow border px-2 py-1 mr-2 rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-800"
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
};
export default TodoForm;
