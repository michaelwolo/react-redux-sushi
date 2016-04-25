import React, { Component } from 'react';
import EntryAmountToggle from '../containers/EntryAmountToggle';

export default (props) => {
  const { amount, item } = props.entry;
  return (
    <div className="order-entry">
      <span className="name">{item.name}</span>
      <div className="details">
        <EntryAmountToggle entry={props.entry} />
        <span className="item-total">{Math.round(item.price * amount * 100) / 100}</span>
      </div>
    </div>
  );
}
