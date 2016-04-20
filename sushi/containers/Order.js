import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem, clearOrder, placeOrder } from '../actions/actions';
import OrderEntry from '../components/OrderEntry';

class Order extends Component {
  remove(item) {
    this.props.removeItem(item);
  }
  submit = (e) => {
    this.props.placeOrder();
    this.props.clearOrder();
  }
  render() {
    const { items, loading } = this.props;
    let total  = this.props.total.toString();
    if (total.toString().indexOf('.') > total.toString().length - 3) {
      total = total + '0';
    }
    return (
      <div className="order">
        <ul>
          {items.map((entry) => {
            return (
              <li key={entry.item.id}>
                <OrderEntry entry={entry} />
              </li>
            );
          })}
        </ul>
        {items.length > 0 ? <div className="submit-container">
          <div className="submit" onClick={this.submit}>
            <span>Place Order</span>
            <span className="total">{`($${total})`}</span>
          </div>
        </div> : null}
        {loading ? <div className="submit-container">
          <div className="submit">
            <span>Loading..</span>
          </div>
        </div> : null}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    items: state.order,
    loading: state.orderPlaced,
    total: state.order.reduce((total, entry) => {
      total += entry.amount * entry.item.price;
      return Math.round(total * 100) / 100;
    }, 0)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem: addItem,
    removeItem: removeItem,
    clearOrder: clearOrder,
    placeOrder: placeOrder
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
