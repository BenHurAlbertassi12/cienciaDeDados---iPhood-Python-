/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFuntion, shouldRun) => {
  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'pending',
  });
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    console.log('effect', new Date().toLocaleTimeString());
    setState({ result: null, error: null, status: 'idle' });

    return asyncFuntion()
      .then((response) => {
        setState({ result: response, error: null, status: 'settled' });
      })
      .catch((error) => {
        setState({ result: null, error: error, status: 'error' });
      });
  }, [asyncFuntion]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  return await data.json();
};

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status === 'idle') {
    return <pre>Nada Executando</pre>;
  }
  if (status === 'pending') {
    return <pre>Loading...</pre>;
  }
  if (status === 'error') {
    return <pre>{error.message}</pre>;
  }
  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
  return 'xiiiiiiiiiii';
};
