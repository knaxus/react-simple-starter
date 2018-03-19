import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './app/App';
import rootReducer from './reducers';
import rootSaga from './sagas';

// import css here
import './index.css';

// initial state of the app as empty object
const initialState = {};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
/* eslint-disable */

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

/**
 * Refer to this link for more about hot reloading of sagas
 * https://stackoverflow.com/questions/37148592/redux-saga-hot-reloading
 */

let sagaTask = sagaMiddleware.run(function* () {
  yield rootSaga();
});

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });

  module.hot.accept('./sagas', () => {
    const getNewSagas = require('./sagas');
    sagaTask.cancel()
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(function* replacedSaga(action) {
        yield getNewSagas()
      })
    })
  })
}

// run the saga
store.runSaga = sagaMiddleware.run(rootSaga, store.dispatch);

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
