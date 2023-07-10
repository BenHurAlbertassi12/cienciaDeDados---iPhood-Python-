import React, { Component } from 'react';

import './Home.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts/Posts';
import ButtonLoadMore from '../../components/Button/ButtonLoadMore';
import { InputSearch } from '../../components/InputSearch/InputSearch';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2,
      searchValue: '',
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && <h1>Search Value: {searchValue}</h1>}

          <InputSearch
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
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
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
