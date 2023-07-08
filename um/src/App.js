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

    const [posts] = await Promise.all([postsResponse])
    const postsJson = await posts.json()

    this.setState({ posts: postsJson })
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
