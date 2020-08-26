import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="group">
      <Button name="AC" color="#e0e0e0" />
      <Button name="+/-" color="#e0e0e0" />
      <Button name="%" color="#e0e0e0" />
      <Button name="÷" />
    </div>
    <div className="group">
      <Button name="7" color="#e0e0e0" />
      <Button name="8" color="#e0e0e0" />
      <Button name="9" color="#e0e0e0" />
      <Button name="x" />
    </div>
    <div className="group">
      <Button name="4" color="#e0e0e0" />
      <Button name="5" color="#e0e0e0" />
      <Button name="6" color="#e0e0e0" />
      <Button name="-" />
    </div>
    <div className="group">
      <Button name="1" color="#e0e0e0" />
      <Button name="2" color="#e0e0e0" />
      <Button name="3" color="#e0e0e0" />
      <Button name="+" />
    </div>
    <div className="group">
      <Button name="0" wide color="#e0e0e0" />
      <Button name="." color="#e0e0e0" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
