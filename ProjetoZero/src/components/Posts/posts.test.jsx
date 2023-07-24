import React from 'react';
import { render } from '@testing-library/react';
import { Posts } from './Posts';

describe('Posts component', () => {
  test('renders correctly', () => {
    const posts = [
      { id: 1, title: 'Post 1', body: 'This is the body of post 1', cover: 'post1.jpg' },
      { id: 2, title: 'Post 2', body: 'This is the body of post 2', cover: 'post2.jpg' },
      { id: 3, title: 'Post 3', body: 'This is the body of post 3', cover: 'post3.jpg' },
    ];

    const { getByText, getByAltText } = render(<Posts posts={posts} />);

    posts.forEach((post) => {
      const titleElement = getByText(post.title);
      const bodyElement = getByText(post.body);
      const coverImage = getByAltText(post.title);

      expect(titleElement).toBeInTheDocument();
      expect(bodyElement).toBeInTheDocument();
      expect(coverImage).toBeInTheDocument();
    });
  });

  test('does not render any post card when no posts are provided', () => {
    const { container } = render(<Posts posts={[]} />);
    const postCards = container.querySelectorAll('.post-card');
    expect(postCards.length).toBe(0);
  });
});
