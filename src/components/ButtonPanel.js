import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = btnName => props.clickHandler(btnName);

  return (
    <div>
      <div className="group">
        <Button name="AC" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="+/-" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="%" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="÷" />
      </div>
      <div className="group">
        <Button name="7" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="8" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="9" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="x" />
      </div>
      <div className="group">
        <Button name="4" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="5" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="6" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="-" />
      </div>
      <div className="group">
        <Button name="1" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="2" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="3" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="+" />
      </div>
      <div className="group">
        <Button name="0" wide color="#e0e0e0" clickHandler={handleClick} />
        <Button name="." color="#e0e0e0" clickHandler={handleClick} />
        <Button name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
