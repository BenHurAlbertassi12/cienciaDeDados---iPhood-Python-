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
      postPerPages: 2
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
    console.log('load mor posts chamado');
  }

  componentDidUpdate() {
    // Código de atualização (caso necessário)
  }

  componentWillUnmount() {
    // Código de limpeza (caso necessário)
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <ButtonLoadMore
          text='LoadMorePosts'
          onClick={this.loadMorePosts}
        />
      </section>
    );
  }
}
