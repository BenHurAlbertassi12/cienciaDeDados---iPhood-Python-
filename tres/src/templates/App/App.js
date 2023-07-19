/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Posts } from '../../components/Posts/Posts';

import { PostsProvider } from '../../context/PostsProvider/PostProvider';
import { CounterProvider } from '../../context/CounterProvider/CounterProvider';
import './App.css';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
