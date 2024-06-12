import { CompleteIcon } from '../components/completeIcon';
import { DeleteIcon } from '../components/deleteIcon';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todoItem">
      <CompleteIcon />
      <DeleteIcon />
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
