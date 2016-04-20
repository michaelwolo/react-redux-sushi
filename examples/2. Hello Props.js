var Hello = React.createClass({
  render: function () {
    return <div className="headline">Hello {this.props.name}</div>;
  }
});

// USAGE
// <Hello name="World" />

// DEMO
// https://jsfiddle.net/69z2wepo/39390/
