import React, { Component } from 'react';

export class ButtonLoadMore extends Component {
  render() {
    const { text, onClick } = this.props;

    return <button onClick={onClick}>{text}</button>;
  }
}

export default ButtonLoadMore;
