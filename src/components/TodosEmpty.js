import PropTypes from 'prop-types';
import '../styles/TodosEmpty.css';

function TodosEmpty() {

  return (
    <p>Create a new TODO...</p>
  );
}

TodosEmpty.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
};

export { TodosEmpty };
