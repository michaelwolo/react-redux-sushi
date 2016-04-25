import React, { Component } from 'react';
import Navigation from '../containers/Navigation';
import ItemList from '../containers/ItemList';
import OrderContainer from './OrderContainer';
import OrderSuccessModal from '../containers/OrderSuccessModal';

// Example of a pure render component without interactions
// No need to extend functionality from React's Component class

export default (props) => {
  return (
    <div className="menu">
      <div className="menu-content">
        <Navigation />
        <ItemList />
      </div>
      <OrderContainer />
      <OrderSuccessModal />
    </div>
  );
}
