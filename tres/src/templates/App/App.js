/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { PostsProvider } from '../../context/PostsProvider/PostProvider';
import './App.css';

function App() {
  return (
    <PostsProvider>
      <>
        <h1>Ola</h1>
      </>
    </PostsProvider>
  );
}

export default App;
