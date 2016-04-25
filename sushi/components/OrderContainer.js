import React, { Component } from 'react';
import Order from '../containers/Order';

// Example of a component with a browser's native event handler (onWheel)

export default class OrderContainer extends Component {
  fixedScroll = (e) => {
    const event = e.nativeEvent;
    const delta = -event.wheelDelta || event.deltaY;
    this.refs.orderContainer.scrollTop += 0.5 * delta;
    event.preventDefault();
  }
  render() {
    return (
      <div ref="orderContainer" className="order-container" onWheel={this.fixedScroll}>
        <Order />
      </div>
    );
  }
}
