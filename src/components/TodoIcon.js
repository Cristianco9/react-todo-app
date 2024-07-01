import { ReactComponent as CheckSVG } from '../assets/icons/check.svg';
import { ReactComponent as DeleteSVG } from '../assets/icons/delete.svg';
import '../styles/TodoIcon.css';
import PropTypes from 'prop-types';

const iconTypes = {
  'check': (color) => <CheckSVG className='Icon-svg' fill={color}/>,
  'delete': (color) => <DeleteSVG  className='Icon-svg' fill={color}/>
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

TodoIcon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { TodoIcon };
