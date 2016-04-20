var Greetings = React.createClass({
  render: function () {
    return (
      <div>
        <Title />
        <GreetingList list={this.props.list} />
      </div>
    );
  }
});

var Title = React.createClass({
  render: function () {
    return <h1>Greetings</h1>
  }
});

var GreetingList = React.createClass({
  render: function () {
    return (
      <ul>
        {this.props.list.map(function (item) {
          return <Greeting key={item.id} text={item.name} />;
        })}
      </ul>
    );
  }
});

var Greeting = React.createClass({
  handleClick: function (text) {
    console.log(text);
  },
  render: function () {
    return <li onClick={this.handleClick.bind(this, this.props.text)}>{this.props.text}</li>;
  }
});

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
// https://jsfiddle.net/69z2wepo/39310/
