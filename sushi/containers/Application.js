import React from 'react';
import { Provider } from 'react-redux';
import Menu from '../components/Menu';

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <Menu />
      </Provider>
    )
  }
}
