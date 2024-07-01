import PropTypes from 'prop-types';
import '../styles/createTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="createTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

CreateTodoButton.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};

export { CreateTodoButton };
