/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'titulo do contexto',
  counter: 0,
  body: 'body do contexto',
};

const GlobalContext = React.createContext();

const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <BodyComponent />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const BodyComponent = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
  } = theContext;
  return <p>{body}</p>;
};

const App = () => {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
};

export default App;
