/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useCounterContext } from '../../context/CounterContext/context';
import { Heading } from '../../components/Heading/Heading';
import { Button } from '../../components/Button/Button';

export const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <h1 onClick={() => actions.increase()}>Oi</h1>

      <Heading />

      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
      </div>
    </div>
  );
};
