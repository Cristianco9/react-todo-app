import PropTypes from 'prop-types';
import '../styles/todoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      You Has been completed <span>{completed} </span>
      of <span>{total}</span> TODOs
    </h1>
  );
}

TodoCounter.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired
};

export { TodoCounter };
