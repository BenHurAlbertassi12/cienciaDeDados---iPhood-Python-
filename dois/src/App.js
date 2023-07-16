import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: PropTypes.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <p>Teste</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
