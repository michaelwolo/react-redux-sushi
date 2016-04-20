// "Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app."
// http://redux.js.org/docs/api/createStore.html

// Creating your store is a bit of boilerplate but how you want to define your state is up to you

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/reducers';

export default function (data) {
  var reducer = combineReducers(reducers);
  var createFinalStore = applyMiddleware(thunk)(createStore);
  var store = createFinalStore(reducer, data);
  return store;
}

// Without middleware and multiple reducers this entire file could be reduced to:

// import { createStore } from 'redux';
// import reducer from '../path/to/reducer.js';

// export default function (data) {
//   return createStore(reducer, data);
// }

// So index.js would have likely just replaced this file with one line:

// const store = createStore(reducer, data);
