import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  // const handleClick = btnName => props.clickHandler(btnName);
  const { clickHandler } = props;

  return (
    <div>
      <div className="group">
        <Button name="AC" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="+/-" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="%" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="÷" handleClick={clickHandler} />
      </div>
      <div className="group">
        <Button name="7" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="8" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="9" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="x" handleClick={clickHandler} />
      </div>
      <div className="group">
        <Button name="4" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="5" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="6" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="-" handleClick={clickHandler} />
      </div>
      <div className="group">
        <Button name="1" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="2" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="3" color="#e0e0e0" handleClick={clickHandler} />
        <Button name="+" handleClick={clickHandler} />
      </div>
      <div className="group">
        <Button name="0" wide color="#e0e0e0" handleClick={clickHandler} />
        <Button name="." color="#e0e0e0" handleClick={clickHandler} />
        <Button name="=" handleClick={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
