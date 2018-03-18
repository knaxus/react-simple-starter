import axios from 'axios';
import { takeLatest, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { HANDLE_API_CALLS } from './constants';


// function that makes the api request and returns a Promise for response
function callToAPI({ method, url, data }) {
  return axios({
    method,
    url,
    data,
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* handleAPICalls(action) {
  try {
    const response = yield call(callToAPI, action.method, action.url, action.body);
    if (action.handleSuccess) {
      yield call(action.handleSuccess, response.data);
    }
  } catch (err) {
    if (!action.showToast) {
      toastr.error('ERROR', 'Failed to request');
    }
    if (action.handleError) {
      yield call(action.handleError, err.response);
    }
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* callToAPIWatcher() {
  yield takeLatest(HANDLE_API_CALLS, handleAPICalls);
}

/* eslint-disable */
export {
  callToAPIWatcher,
};

/* eslint-enable */
