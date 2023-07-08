import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [
        {
          id: 1,
          title: 'titulo 1',
          body: 'body 1'
        },
        {
          id: 2,
          title: 'titulo 2',
          body: 'body 2'
        },
        {
          id: 3,
          title: 'titulo 3',
          body: 'body 3'
        },
      ],
    };
  }

  render() {
    const { post } = this.state;

    return (
      <div>
        {post.map(post => (
          <div key={post.id}>
            <h1>{ post.title }</h1>
            <h3>{ post.body }</h3>
          </div>
        ))}
      </div>
    );
  }
}
