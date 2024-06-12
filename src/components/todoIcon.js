import { ReactComponent as CheckSVG } from '../assets/icons/check.svg';
import { ReactComponent as DeleteSVG } from '../assets/icons/delete.svg';
import PropTypes from 'prop-types';

const iconTypes = {
  'check': <CheckSVG/>,
  'delete': <DeleteSVG/>
};

function TodoIcon({ type }) {
  return (
    <span
      className={`Icon Icon-svg Icon-${type}`}
    >
      {iconTypes[type]}
    </span>
  );
}

TodoIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export { TodoIcon };
