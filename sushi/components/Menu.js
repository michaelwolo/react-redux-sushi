import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Navigation from '../containers/Navigation';
import ItemList from '../containers/ItemList';
import Order from '../containers/Order';
import OrderSuccessModal from '../containers/OrderSuccessModal';

export default class Menu extends Component {
  fixedScroll = (e) => {
    const event = e.nativeEvent;
    const delta = -event.wheelDelta || event.deltaY;
    findDOMNode(this).querySelector('.order-container').scrollTop += 0.5 * delta;
    event.preventDefault();
  }
  render() {
    return (
      <div className="menu">
        <div className="menu-content">
          <Navigation />
          <ItemList />
        </div>
        <div className="order-container" onWheel={this.fixedScroll}>
          <Order />
        </div>
        <OrderSuccessModal />
      </div>
    );
  }
}
