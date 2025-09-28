import React from 'react';
import TodoItem from './TodoItem';
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo
}) => {
  return <ul className="space-y-2">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={() => onToggleTodo(todo.id)} onDelete={() => onDeleteTodo(todo.id)} />)}
    </ul>;
};
export default TodoList;