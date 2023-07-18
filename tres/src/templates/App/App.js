/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Posts } from '../../components/Posts/Posts';
import { PostsProvider } from '../../context/PostsProvider/PostProvider';
import './App.css';

function App() {
  return (
    <PostsProvider>
      <>
        <h1>Ola</h1>
        <Posts />
      </>
    </PostsProvider>
  );
}

export default App;
