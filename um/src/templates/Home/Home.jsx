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
      postPerPages: 2,
      searchValue: '',
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPages } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postPerPages),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postPerPages, allPosts, posts } = this.state;
    const nextPage = page + postPerPages;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPages);
    posts.push(...nextPosts);

    this.setState({ posts, pages: nextPage });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  componentDidUpdate() {
    // Código de atualização (caso necessário)
  }

  componentWillUnmount() {
    // Código de limpeza (caso necessário)
  }

  render() {
    const { posts, page, postPerPages, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPages >= allPosts.length;

    const filterPost = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
      }) : posts

    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && <h1>Search Value: {searchValue}</h1>}

          <InputSearch
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>

        {filterPost.length > 0 && <Posts posts={filterPost} />}
        {filterPost.length === 0 && <p>Peço desculpas, nada foi encontrado</p>}
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
