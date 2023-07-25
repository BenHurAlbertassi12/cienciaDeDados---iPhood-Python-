import propy from 'prop-types';
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const initialState = {
  counter: 0,
  kiadubg: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

CounterContextProvider.apply.propTypes = {
  children: propy.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error(
      'you have to use useConterContext inside <CounterContextProvider/>',
    );
  }

  return [...context];
};
