/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { GlobalContext } from '../../context/App';

export const BodyComponent = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setState,
  } = theContext;
  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body} {counter}
    </p>
  );
};
