var Greetings = React.createClass({
  render: function () {
    return (
      <div>
        <Title />
        <GreetingList list={this.props.list} />
      </div>
    );
  }
})

var Title = React.createClass({
  render: function () {
    return <h1>Greetings</h1>
  }
})

var GreetingList = React.createClass({
	getInitialState: function () {
  	return {
    	list: this.props.list
    };
  },
  shiftList: function (index) {
  	var updatedList = this.state.list.splice(index, 1).concat(this.state.list);
  	this.setState({
    	list: updatedList
    });
  },
  render: function () {
    return (
      <ul>
        {this.state.list.map(function (item, i) {
          return <Greeting key={item.id} text={item.name} action={this.shiftList.bind(this, i)} />;
        }, this)}
      </ul>
    );
  }
});

var Greeting = React.createClass({
  render: function () {
    return <li onClick={this.props.action}>{this.props.text}</li>;
  }
})

var list = [{
	id: 1,
  name: 'Hello world'
},{
	id: 2,
  name: 'Bonjour le monde'
},{
	id: 3,
  name: '你好，世界'
}];

// USAGE
// <Greetings list={list} />

// DEMO
// https://jsfiddle.net/69z2wepo/40669/
