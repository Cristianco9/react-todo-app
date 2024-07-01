import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import PropTypes from 'prop-types';

const TodoContext =  React.createContext();

function TodoProvider({ children }) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODO_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const addTodo = (text) => {
    const newItem = [...todos];
    newItem.push({
      text,
      completed: false,
    });
    saveTodos(newItem);
  };

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

  const toggleTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    newItem[todoIndex].completed = !newItem[todoIndex].completed;
    saveTodos(newItem);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      toggleTodo,
      openModal,
      setOpenModal,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoContext, TodoProvider };
