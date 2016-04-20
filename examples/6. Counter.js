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

// USAGE
// <Counter count={7} />

// DEMO
// https://jsfiddle.net/g3pn9bfq/3/
