import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onToggle}
      />

      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />

      <hr className="styled-hr"></hr>
    </li>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export { TodoItem };
