import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, wide, color }) => (
  <button
    type="button"
    className="btn"
    style={{
      /* stylelint-disable */
      width: wide ? '50%' : '25%',
      backgroundColor: color,
      /* stylelint-enable */
    }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};

export default Button;
