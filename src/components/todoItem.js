import { CompleteIcon } from '../components/completeIcon';
import { DeleteIcon } from '../components/deleteIcon';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
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
