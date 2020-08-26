import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="result">
    <p>{result}</p>
  </div>
);

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
