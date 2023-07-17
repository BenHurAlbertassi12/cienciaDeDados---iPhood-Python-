/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { number } from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const savedCB = useRef();

  useEffect(() => {
    savedCB.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCB.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <>
      <h1>Countador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        {' '}
        + {incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        {' '}
        - {incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </>
  );
}

export default App;

// import { useReducer } from 'react';
// import './App.css';
// import { Div } from './components/Div/Div';
// import { AppContext } from './context/App';

// function App() {
//   return (
//     <AppContext>
//       <Div />
//     </AppContext>
//   );
// }

// export default App;
