/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from 'react';

const useMyHook = (cb) => {
  const savedCB = useRef();

  useEffect(() => {
    savedCB.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCB.current();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};

function App() {
  const [counter, setCounter] = useState(0);

  useMyHook(() => setCounter((c) => c + 1));

  return (
    <>
      <h1>Countador: {counter}</h1>
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
