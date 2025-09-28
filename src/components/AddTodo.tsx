import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';
interface AddTodoProps {
  onAddTodo: (text: string) => void;
}
const AddTodo: React.FC<AddTodoProps> = ({
  onAddTodo
}) => {
  const [text, setText] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(text);
    setText('');
  };
  return <form onSubmit={handleSubmit} className="flex mb-6">
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add a new task..." className="flex-grow px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      <button type="submit" className="bg-blue-500 text-white px-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center" disabled={!text.trim()}>
        <PlusIcon size={20} />
      </button>
    </form>;
};
export default AddTodo;