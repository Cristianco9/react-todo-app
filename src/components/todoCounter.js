import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../context/TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  return (

    completedTodos === totalTodos
      ? <h1 className="TodoCounter">
          You has been completed all TODOs
      </h1>
      : <h1 className="TodoCounter">
          You has been completed <span>{completedTodos} </span>
          of <span>{totalTodos}</span> TODOs
      </h1>
  );
}

export { TodoCounter };
