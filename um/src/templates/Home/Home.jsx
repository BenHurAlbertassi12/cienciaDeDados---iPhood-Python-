import React, { Component } from "react";

import './Home.css';

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts/Posts";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
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
        <Posts posts={posts}/>
        </section>
    );
  }
}
