import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([...todos, {
        id: crypto.randomUUID(),
        text,
        completed: false
      }]);
    }
  };
  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo,
      completed: !todo.completed
    } : todo));
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return <div className="w-full max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-medium text-gray-800 mb-6 text-center">
        Minimalist Todo
      </h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <AddTodo onAddTodo={addTodo} />
        <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
        {todos.length === 0 && <p className="text-gray-400 text-center mt-6">
            No tasks yet. Add one above!
          </p>}
      </div>
    </div>;
};
export default TodoApp;