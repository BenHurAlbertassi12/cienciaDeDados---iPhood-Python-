import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}))
    
  }

  componentDidUpdate() {

  }
  
  componentWillUnmount() {
  
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map(posts => (
          <div key={posts.id}>
            <h1>{posts.title}</h1>
            <h3>{posts.body}</h3>
          </div>
        ))}
      </div>
    );
  }
}
