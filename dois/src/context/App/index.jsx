import React, { useState } from 'react';
import { globalState } from './data';

const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [state, setState] = useState(globalState);

  return (
    <GlobalContext.Provider valur={(state, setState)}>
      {children}
    </GlobalContext.Provider>
  );
};
