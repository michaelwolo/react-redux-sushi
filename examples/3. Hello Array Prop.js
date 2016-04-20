var Hello = React.createClass({
  render: function () {
    return (
      <ul>
        {this.props.list.map(function (item) {
          return <li>{item.name}</li>;
        })}
      </ul>
    );
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
// <Hello list={list} />

// DEMO
// https://jsfiddle.net/69z2wepo/39307/
