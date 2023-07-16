import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // executa uma vez
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  return (
    <div className="App">
      <h1>Contador:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
