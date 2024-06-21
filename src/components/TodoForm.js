import '../styles/TodoForm.css';

function TodoForm() {
  return (
    <form onSubmit={ (event) => {
      event.preventDefault();
    }}>
      <label>Write a new TODO</label>
      <textarea
        placeholder="Learn React.js"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
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
