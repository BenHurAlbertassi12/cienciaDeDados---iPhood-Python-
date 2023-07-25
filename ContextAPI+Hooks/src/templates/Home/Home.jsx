/* eslint-disable no-unused-vars */
import React from 'react';
import { useCounterContext } from '../../context/CounterContext/context';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>Ola</h1>
    </div>
  );
};
