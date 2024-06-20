import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../context/TodoContext';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Learn React.js"
      className='TodoSearch'
      value={searchValue}
      onChange={
        (event) => {
          setSearchValue(event.target.value);
        }
      }
    />
  );
}

export { TodoSearch };
