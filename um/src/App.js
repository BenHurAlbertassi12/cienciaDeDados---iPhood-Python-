import React, { Component } from "react";
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])
    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((posts, index) => {
      return {...posts, cover: photosJson[index].url}
    })

    this.setState({ posts: postsAndPhotos })
    // this.setState({ posts: photosJson })
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(posts => (
            <div className="post">
              <img src={posts.cover} alt={posts.title}></img>
              <div key={posts.id} className="post-content">
                <h1>{posts.title}</h1>
                <h3>{posts.body}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
