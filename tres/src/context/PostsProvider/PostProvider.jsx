import { useReducer } from 'react';
import { PostsContext } from './context';
import { data } from './data';
import p from 'prop-types';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);
  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: p.node.isRequired,
};
