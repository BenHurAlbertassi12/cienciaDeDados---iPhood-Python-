import { useContext, useEffect } from 'react';
import { PostsContext } from '../../context/PostsProvider/context';
import { loadPosts } from '../../context/PostsProvider/actions';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <>
      <h1>Ola de novo</h1>
      {postsState.posts &&
        postsState.posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </>
  );
};
