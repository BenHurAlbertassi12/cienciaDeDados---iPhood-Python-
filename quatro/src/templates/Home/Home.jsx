import { useEffect, useState, useRef } from 'react';

const isObjEq = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, opt) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optRef = useRef(opt);

  useEffect(() => {
    let changed = false;

    if (!isObjEq(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    if (!isObjEq(opt, optRef.current)) {
      optRef.current = opt;
      changed = true;
    }
    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, opt, shouldLoad]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optRef.current,
        });
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (error) {
        if (!wait) {
          setLoading(false);
        }
        console.warn(error);
      }
    };
    fetchData(shouldLoad);
    return () => {
      wait = true;
      controller.abort();
    };
  }, [urlRef, optRef, shouldLoad]);

  return [result, loading];
};

export const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        abc: '1' + postId,
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
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={p.id} onClick={() => handleClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <h1>{result.title}</h1>
            <p>{result.body}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Hello</h1>;
};
