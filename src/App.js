import React from 'react';
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

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <GradientBar1 />
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
