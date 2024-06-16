import PropTypes from 'prop-types';
import '../styles/TodosLoading.css';

function TodosLoading() {
  return (
    <section className='loader'>
      <div className='slider' style={{ '--i': 0 }}></div>
      <div className='slider' style={{ '--i': 1 }}></div>
      <div className='slider' style={{ '--i': 2 }}></div>
      <div className='slider' style={{ '--i': 3 }}></div>
      <div className='slider' style={{ '--i': 4 }}></div>
    </section>
  );
}

TodosLoading.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export { TodosLoading };
