/* eslint-disable no-unused-vars */
import { useCounterContext } from '../../context/CounterContext/context';

export const Heading = () => {
  const [state, actions] = useCounterContext();

  return <h1 style={{ fontSize: '60px' }}>{state.counter}</h1>;
};
