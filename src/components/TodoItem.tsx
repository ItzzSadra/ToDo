import React from 'react';
import { CheckIcon, TrashIcon } from 'lucide-react';
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete
}) => {
  return <li className="flex items-center justify-between bg-gray-50 rounded-md p-3 group">
      <div className="flex items-center flex-grow">
        <button onClick={onToggle} className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${todo.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}>
          {todo.completed && <CheckIcon size={12} className="text-white" />}
        </button>
        <span className={`${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={onDelete} className="text-gray-400 hover:text-red-500 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity">
        <TrashIcon size={16} />
      </button>
    </li>;
};
export default TodoItem;