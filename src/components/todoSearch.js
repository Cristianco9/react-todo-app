import PropTypes from 'prop-types';
import '../styles/TodoSearch.css';

function TodoSearch( { searchValue, setSearchValue } ) {

  return (
    <input
      placeholder="Learn React.js"
      className='TodoSearch'
      value={searchValue}
      onChange={
        (event) => {
          setSearchValue(event.target.value);
        }
      }
    />
  );
}

TodoSearch.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
};

export { TodoSearch };
