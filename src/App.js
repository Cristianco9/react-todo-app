//import React from 'react';
import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList';
import { TodoItem } from './components/todoItem';
import { CreateTodoButton } from './components/createTodoButton';
import { GradientBar1 } from './components/gradientBar1';
import { GradientBar2 } from './components/gradientBar2';

const defaultTodos = [
  { text: 'Learn Express.js', completed: true },
  { text: 'Learn JavaScript', completed: true },
  { text: 'Learn React.js', completed: false },
  { text: 'Learn Node.js', completed: true },
];

function App() {
  return (
    <>
      <GradientBar1 />
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
      <GradientBar2 />

      <CreateTodoButton />
    </>
  );
}

export default App;
