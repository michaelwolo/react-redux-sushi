import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem } from '../actions/actions';

class EntryAmountToggle extends Component {
  add(item) {
    this.props.addItem(item);
  }
  remove(item) {
    this.props.removeItem(item);
  }
  render() {
    const { entry } = this.props;
    return (
      <div className="amount-toggle">
        <span className="minus" onClick={() => this.remove(entry.item)}>-</span>
        <span className="amount">{entry.amount}</span>
        <span className="plus" onClick={() => this.add(entry.item)}>+</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem: addItem,
    removeItem: removeItem
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(EntryAmountToggle);
