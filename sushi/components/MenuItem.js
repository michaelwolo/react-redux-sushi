import React, { Component } from 'react';

export default class MenuItem extends Component {
  render() {
    const { name, price } = this.props;
    return (
      <div className="menu-item">
        <div className="image"></div>
        <div className="details">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    );
  }
}
