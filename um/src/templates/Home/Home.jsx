import React, { useState, useEffect } from 'react';

import './Home.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts/Posts';
import ButtonLoadMore from '../../components/Button/ButtonLoadMore';
import { InputSearch } from '../../components/InputSearch/InputSearch';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  useEffect(() => {
    const fetchData = async () => {
      const postsAndPhotos = await loadPosts();
      setAllPosts(postsAndPhotos);
      setPosts(postsAndPhotos.slice(0, postsPerPage));
    };

    fetchData();
  }, [postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    setPosts([...posts, ...nextPosts]);
    setPage(nextPage);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <section className='container'>
      <div className='search-container'>
        {!!searchValue && <h1>Search Value: {searchValue}</h1>}

        <InputSearch searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 ? (
        <Posts posts={filteredPosts} />
      ) : (
        <p>Peço desculpas, nada foi encontrado</p>
      )}

      <div className='buttonContainer'>
        {!searchValue && (
          <ButtonLoadMore
            text='LoadMorePosts'
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};

