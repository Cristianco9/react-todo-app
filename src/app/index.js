import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodoCounter } from '../components/todoCounter';
import { TodoSearch } from '../components/todoSearch';
import { TodoList } from '../components/todoList';
import { TodoItem } from '../components/todoItem';
import { CreateTodoButton } from '../components/createTodoButton';
import { GradientBar1 } from '../components/gradientBar1';
import { GradientBar2 } from '../components/gradientBar2';



function App() {

  const [ todos, saveTodos ] = useLocalStorage('TODO_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text == text);
    newItem[todoIndex].completed = true;
    saveTodos(newItem);
  };

  const deleteTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text == text);
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  };

  return (
    <>
      <GradientBar1 />
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key="{todo.text}"
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <GradientBar2 />

      <CreateTodoButton />
    </>
  );
}

export default App;
