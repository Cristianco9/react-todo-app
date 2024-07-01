import React from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
import { TodosLoading } from './TodosLoading';
import { TodosEmpty } from './TodosEmpty';
import '../styles/TodoList.css';

function TodoList() {
  const {
    searchedTodos,
    toggleTodo,
    deleteTodo,
    loading,
  } = React.useContext(TodoContext);

  if (loading) {
    return <TodosLoading />;
  }

  if (!loading && searchedTodos.length === 0) {
    return <TodosEmpty />;
  }

  return (
    <ul>
      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => toggleTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </ul>
  );
}

export { TodoList };
