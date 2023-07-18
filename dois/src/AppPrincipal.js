/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './App.css';
import { Div } from './components/Div/Div';
import { AppContext } from './context/App';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
