import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  console.log('pai renderizou');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div className="post" key={posts.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
