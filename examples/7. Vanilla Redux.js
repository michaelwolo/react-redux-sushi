// Initialize app

var store = Redux.createStore(counter, 700);
store.subscribe(render);
render();

// Dispatch actions on a timer or through user intercation

setInterval(function() {
	store.dispatch({ type: 'DECREMENT' });
}, 500);

document.addEventListener('click', function() {
  store.dispatch({ type: 'INCREMENT' });
});

// Reducer (used in store creation) modifies state

function counter(state = 0, action) {
  switch (action.type) {
  	case 'INCREMENT':
    	return state + 1;
    case 'DECREMENT':
    	return state - 1;
    default:
    	return state;
  }
}

// This is where React would be used
// You're free to implement your own view layer

function render() {
	var state = store.getState();
  document.querySelector('body').innerHTML = state;
  console.log(state);
}

// DEMO
// https://jsfiddle.net/0ekwvwox/8/
