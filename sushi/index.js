// For adding CSS styles to index.html with webpack
require('./styles/style.css');

import React from 'react';
import { render } from 'react-dom';
import { state } from './store/base';
import initialization from './store/initialization';
import Application from './containers/application';

const store = initialization(state);

render(
  <Application store={store} />,
  document.getElementById('container')
);
