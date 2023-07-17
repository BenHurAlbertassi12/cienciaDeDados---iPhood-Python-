/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { GlobalContext } from '../../context/App';

export const BodyComponent = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
    >
      {body}
    </p>
  );
};
