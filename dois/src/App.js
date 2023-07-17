/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useReducer } from 'react';
import './App.css';
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

const globalState = {
  title: 'o titulo do context',
  body: 'o corpo do context',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <>
      <h1>{state.title}</h1>
      <p>{state.body}</p>
      <p>Counter: {state.counter}</p>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-br'),
          })
        }
      >
        muda
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>invert</button>
    </>
  );
}

export default App;
