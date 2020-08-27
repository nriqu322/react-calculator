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
    console.log(btnName);
  }

  render() {
    const result = this.state;
    console.log(result);
    return (
      <div className="calculator">
        <Display result={result.total || result.next || result.operation || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
