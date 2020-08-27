import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const handleClick = btnName => props.clickHandler(btnName);
  const { name, wide, color } = props;

  return (
    <button
      type="button"
      className="btn"
      style={{
        /* stylelint-disable */
        width: wide ? '50%' : '25%',
        backgroundColor: color,
        /* stylelint-enable */
      }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
  clickHandler: null,
};

export default Button;
