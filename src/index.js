import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './app/App';
/* eslint-disable */
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
/* eslint-enable */
