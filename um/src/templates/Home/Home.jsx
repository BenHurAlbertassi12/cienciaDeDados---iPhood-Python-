import React, { Component } from "react";

import './Home.css';

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts/Posts";
import ButtonLoadMore from "../../components/Button/ButtonLoadMore";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postPerPages: 2,
      searchValue: ''
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPages } = this.state
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postPerPages),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const { page, postPerPages, allPosts, posts } = this.state  
    const nextPage = page + postPerPages;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPages);
    posts.push(...nextPosts)

    this.setState({ posts, pages: nextPage})
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
    
  }

  componentDidUpdate() {
    // Código de atualização (caso necessário)
  }

  componentWillUnmount() {
    // Código de limpeza (caso necessário)
  }

  render() {
    const { posts, page, postPerPages, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPages >= allPosts.length

    return (
      <section className='container'>
        <input onChange={this.handleChange} type='search' value={searchValue} />
        <br></br>
        <br></br>
        <br></br>
        <Posts posts={posts} />
        <div className='buttonContainer'>
          <ButtonLoadMore
            text='LoadMorePosts'
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}
