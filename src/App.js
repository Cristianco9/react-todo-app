import React from 'react';
import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList';
import { TodoItem } from './components/todoItem';
import { CreateTodoButton } from './components/createTodoButton';

const defaultTodos = [
  { text: 'Learn Express.js', completed: true },
  { text: 'Learn JavaScript', completed: true },
  { text: 'Learn React.js', completed: false },
  { text: 'Learn Node.js', completed: true },
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key="{todo.text}"
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
