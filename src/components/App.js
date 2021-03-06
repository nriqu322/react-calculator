import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState(dataObj => calculate(dataObj, btnName));
  }

  render() {
    const result = this.state;
    return (
      <div className="calculator">
        <Display result={result.next || result.total || result.operation || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
