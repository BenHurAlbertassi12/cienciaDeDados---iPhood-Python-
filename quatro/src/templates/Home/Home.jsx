import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url, opt) => {
  const [result, setResult] = useState(null);
  const [loading, setLoadin] = useState(false);

  useEffect(() => {
    setLoadin(true);

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const response = await fetch(url, opt);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoadin(false);
      } catch (error) {
        setLoadin(false);
        throw error;
      }
    };
    fetchData();
  }, [url, opt]);

  return [result, loading];
};

export const Home = () => {
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  if (loading) <p>Loading...</p>;

  if (!loading && result) console.log(result);

  return <h1>ola</h1>;
};
