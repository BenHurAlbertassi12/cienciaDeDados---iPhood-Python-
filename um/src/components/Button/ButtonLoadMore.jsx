import prop from 'prop-types';
import React, { Component } from 'react';

import './ButtonLoadMore.css';

export class ButtonLoadMore extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;

    return (
      <button className="button" disabled={disabled} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default ButtonLoadMore;

ButtonLoadMore.defaultProps = {
  disabled: false,
};

ButtonLoadMore.propTypes = {
  text: prop.string.isRequired,
  onClick: prop.func.isRequired,
  disabled: prop.bool,
};
