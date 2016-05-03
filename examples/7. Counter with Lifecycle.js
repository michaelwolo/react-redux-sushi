var Counter = React.createClass({
	getInitialState: function () {
  	return {
    	count: this.props.count
    };
  },
  add: function () {
  	this.setState({
    	count: this.state.count + 1
    });
  },
  decrease: function () {
  	var count = this.state.count - 1;
  	this.setState({
    	count: count > 0 ? count : 0
    });
  },
	// Animate changed count after render
	componentDidUpdate: function (prevProps, prevState) {
    var count = document.querySelector('.count');
    Velocity(count, 'stop', true);
		if (prevState.count > this.state.count) {
			Velocity(count, {
      	color: '#F00',
        scale: 0.7
      }, timingConfig);
		} else if (prevState.count < this.state.count) {
			Velocity(count, {
      	color: '#0F0',
        scale: 1.3
      }, timingConfig);
		}
	},
  render: function () {
    return (
    	<div className="counter">
        <span className="minus" onClick={this.decrease}>-</span>
        <span className="count">{this.state.count}</span>
        <span className="plus" onClick={this.add}>+</span>
      </div>
    );
  }
});

var timingConfig = {
  duration: 50,
  easing: 'ease',
  complete: function (elem) {
    Velocity(elem, {
      color: '#000',
      scale: 1
    },{
      duration: 100,
      easing: 'ease'
    });
  }
};

// USAGE
// <Counter count={7} />

// DEMO
// https://jsfiddle.net/g3pn9bfq/4/
