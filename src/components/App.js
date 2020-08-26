import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="calculator">
      <Display />
      <ButtonPanel />
      <calculate />
    </div>
  );
}

export default App;
