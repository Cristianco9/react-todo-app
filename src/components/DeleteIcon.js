import { TodoIcon } from './TodoIcon';
import PropTypes from 'prop-types';

function DeleteIcon({ completed, onDelete }) {
  return (
    <TodoIcon
      type = 'delete'
      color={completed ? 'green' : 'gray'}
      onClick={onDelete}
    />
  );
}

DeleteIcon.propTypes = {
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export { DeleteIcon };
