import { TodoIcon } from './todoIcon';
import PropTypes from 'prop-types';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

CompleteIcon.propTypes = {
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export { CompleteIcon };
