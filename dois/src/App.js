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

function App() {
  return (
    <>
      <h1>Ola</h1>
    </>
  );
}

export default App;
