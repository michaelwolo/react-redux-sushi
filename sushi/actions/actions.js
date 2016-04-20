// Actions must include at least one property: type
// Type is how reducers choose between different state transformations
// Additional properties are used to assist reducers transform state

import * as actions from '../types/types';

export function addItem(item) {
  return {
    type: actions.ADD_TO_ORDER,
    item: item
  };
}

export function removeItem(item) {
  return {
    type: actions.REMOVE_FROM_ORDER,
    item: item
  };
}

export function clearOrder() {
  return {
    type: actions.CLEAR_ORDER
  };
}

export function changeCategory(category) {
  return {
    type: actions.CHANGE_CATEGORY,
    category: category
  };
}

export function toggleOrderSuccessModal() {
  return {
    type: actions.TOGGLE_ORDER_SUCCESS_MODAL
  };
}

export function waitForOrderSuccess() {
  return {
    type: actions.PLACE_ORDER
  };
}

export function placeOrder() {
  return dispatch => {
    dispatch(waitForOrderSuccess());
    setTimeout(() => {
      dispatch({
        type: actions.TOGGLE_ORDER_SUCCESS_MODAL
      });
    }, 2000);
  }
}
