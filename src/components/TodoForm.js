import React from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoForm.css';

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [ newTodoValue, setNewTodoValue ] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new TODO</label>
      <textarea
        placeholder="Learn React.js"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancel</button>
        <button
          type='submit'
          className="TodoForm-button TodoForm-button--add"
        >Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
