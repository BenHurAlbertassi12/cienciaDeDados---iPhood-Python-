import React, { Component } from 'react';

import './ButtonLoadMore.css';

export class ButtonLoadMore extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

      return <button
          className='button'
          disabled={disabled}
          onClick={onClick}>{text}
      </button>;
  }
}

export default ButtonLoadMore;
