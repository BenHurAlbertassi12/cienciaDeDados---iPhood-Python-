import React, { Component } from "react";

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

    this.setState({posts: postsJson})
  }

  componentDidUpdate() {

  }
  
  componentWillUnmount() {
  
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="posts">
        {posts.map(posts => (
          <div key={posts.id} className="post-content">
            <h1>{posts.title}</h1>
            <h3>{posts.body}</h3>
          </div>
        ))}
      </div>
    );
  }
}
