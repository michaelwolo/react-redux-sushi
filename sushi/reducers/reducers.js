import * as actions from '../types/types';

export function items(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function order(state = [], action) {
  switch (action.type) {
    case actions.ADD_TO_ORDER:
      var alreadyOrdered = false;
      var order = state.map((entry) => {
        if (entry.item.id === action.item.id) {
          alreadyOrdered = true;
          return {
            amount: entry.amount + 1,
            item: entry.item
          }
        } else {
          return entry;
        }
      });
      if (!alreadyOrdered) {
        order = order.concat({
          amount: 1,
          item: action.item
        });
      }
      return order;
    case actions.REMOVE_FROM_ORDER:
      return state
        .map((entry) => {
          if (entry.item.id === action.item.id) {
            return {
              amount: entry.amount - 1,
              item: entry.item
            };
          } else {
            return entry;
          }
        })
        .filter((entry) => {
          return entry.amount > 0;
        });
    case actions.CLEAR_ORDER:
      return [];
    default:
      return state;
  }
}

export function activeCategory(state = '', action) {
  switch (action.type) {
    case actions.CHANGE_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

export function orderSuccessVisible(state = false, action) {
  switch (action.type) {
    case actions.TOGGLE_ORDER_SUCCESS_MODAL:
      return !state;
    default:
      return state;
  }
}

export function orderPlaced(state = false, action) {
  switch (action.type) {
    case actions.PLACE_ORDER:
      return true;
    case actions.TOGGLE_ORDER_SUCCESS_MODAL:
      return false;
    default:
      return state;
  }
}
