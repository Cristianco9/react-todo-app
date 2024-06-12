import PropTypes from 'prop-types';
import '../styles/TodoList.css';

function TodoList({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
}

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoList };
