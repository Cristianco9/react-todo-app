import PropTypes from 'prop-types';
import '../styles/TodosEmpty.css';

function TodosError() {

  return (
    <p>Error...</p>
  );
}

TodosError.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
};

export { TodosError };
