import '../styles/todoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1>
      You Has been completed {completed} of {total} TODOs
    </h1>
  )
}

export { TodoCounter }
