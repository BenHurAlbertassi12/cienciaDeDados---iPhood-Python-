import React, { Component } from "react";
import './App.css';
import {PostCard} from './components/PostCard/PostCard'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');

    // const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await postsResponse.json();
    const photosJson = await photosResponse.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

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
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />  
          ))}
        </div>
      </section>
    );
  }
}
