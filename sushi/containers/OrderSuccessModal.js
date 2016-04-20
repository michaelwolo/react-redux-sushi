import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem, toggleOrderSuccessModal } from '../actions/actions';

class OrderSuccess extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div className={'order-success' + (visible ? '' : ' hidden')} onClick={() => this.props.toggleOrderSuccessModal()}>
        <div className="modal">
          <h1>Order Placed</h1>
          <span>Your server will be with you shortly.</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    visible: state.orderSuccessVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleOrderSuccessModal: toggleOrderSuccessModal
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess);
