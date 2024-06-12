import PropTypes from 'prop-types';
import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todoItem">
      <span
        className={`Icon Icon-check ${props.completed &&
        'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p
        className={`TodoItem-p ${props.completed &&
        'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <span
        className='Icon Icon-delete'
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export { TodoItem };
