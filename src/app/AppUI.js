import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { GradientBar1 } from '../components/GradientBar1';
import { GradientBar2 } from '../components/GradientBar2';
import PropTypes from 'prop-types';

function AppUI(
  {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
  }
) {
  return (
    <>
      <GradientBar1 />
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p>Loading content...</p>}
        {error && <p>Cannot  load content...</p>}
        {(!loading && searchedTodos.length == 0) && <p>Create the first TODO</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key="{todo.text}"
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <GradientBar2 />

      <CreateTodoButton />
    </>
  );
}

AppUI.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  completedTodos: PropTypes.string.isRequired,
  totalTodos: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  searchedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export { AppUI };
