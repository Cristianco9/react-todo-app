import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodosLoading } from '../components/TodosLoading';
import { TodosEmpty } from '../components/TodosEmpty';
import { TodoItem } from '../components/TodoItem';
import { TodoContext } from '../context/TodoContext';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { GradientBar1 } from '../components/GradientBar1';
import { GradientBar2 } from '../components/GradientBar2';

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext);

  return (
    <>
      <GradientBar1 />

      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        { () => (
          <TodoList>
            {loading && <TodosLoading />}
            {error && <p>Cannot  load content...</p>}
            {(!loading && searchedTodos.length == 0) && <TodosEmpty/>}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <GradientBar2 />

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
