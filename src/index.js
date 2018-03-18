import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './app/App';
import rootReducer from './reducer';

const initialState = {};
/* eslint-disable */

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

/* eslint-enable react/jsx-filename-extension */

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById('root'),
    );
  });
}
/* eslint-enable */
