/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Posts } from '../../components/Posts/Posts';
import { PostsProvider } from '../../context/PostsProvider/PostProvider';
import './App.css';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
