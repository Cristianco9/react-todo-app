import '../styles/TodosLoading.css';

function TodosLoading() {
  return (
    <section className='loader'>
      <div className='slider' style={{ '--i': 0 }}></div>
      <div className='slider' style={{ '--i': 1 }}></div>
      <div className='slider' style={{ '--i': 2 }}></div>
    </section>
  );
}

export { TodosLoading };
