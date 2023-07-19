import { useReducer } from 'react';
import { data } from './data';
import { reducer } from './reducer';
import { ExempleContext } from './context';
import P from 'prop-types';

export const ExempleProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return (
    <ExempleContext.Provider
      value={{ postsState: counterState, counterDispatch }}
    >
      {children}
    </ExempleContext.Provider>
  );
};

ExempleProvider.propTypes = {
  children: P.node.isRequired,
};
