import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'BenHur Albertassi',
      counter: 0
    };

    this.handlePClick = this.handlePClick.bind(this);
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  handlePClick() {
    this.setState({ name: 'Albertassi' });
  }

  render() {
    const { name, counter } = this.state;

    return (
      <div>
        <h1 onClick={this.handlePClick}>
          {name}
        </h1>
        <h2 onClick={this.handleAClick}>{counter}</h2>
      </div>
    );
  }
}
