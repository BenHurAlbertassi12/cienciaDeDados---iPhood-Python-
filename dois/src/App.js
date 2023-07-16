import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { useState } from 'react';

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: PropTypes.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => {
    setCounter(counter + num);
  };

  return (
    <div className="App">
      <p>Teste</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
