import { useEffect, useState, useRef } from 'react';

const useFetch = (url, opt) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optRef = useRef(opt);

  useEffect(() => {
    if (url !== urlRef.current) {
      urlRef.current = url;
      setShouldLoad(!shouldLoad);
    }
  }, [url, opt, shouldLoad]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const response = await fetch(urlRef.current, optRef.current);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    fetchData(shouldLoad);
  }, [urlRef, optRef, shouldLoad]);

  return [result, loading];
};

export const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        abc: '1',
      },
    },
  );

  useEffect(() => {
    console.log('id do post', postId);
  }, [postId]);

  const handleClick = (id) => {
    setPostId(id);
  };

  if (loading) return <p>Loading...</p>;

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 &&
          result.map((p) => (
            <div key={p.id} onClick={() => handleClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))}
      </div>
    );
  }

  return <h1>Hello</h1>;
};
