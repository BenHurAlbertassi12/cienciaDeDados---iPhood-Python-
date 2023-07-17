/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { GlobalContext } from '../../context/App';

export const H1 = () => {
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
