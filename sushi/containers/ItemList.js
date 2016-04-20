import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/actions';
import MenuItem from '../components/MenuItem';

export default class ItemList extends Component {
  add(item) {
    this.props.addItem(item);
  }
  render() {
    const { items } = this.props;
    return (
      <div className="item-list">
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => this.add(item)}>
                <MenuItem name={item.name} price={item.price} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    items: state.items
      .filter((item) => {
        return item.category === state.activeCategory;
      })
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem: addItem
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
