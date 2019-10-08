import { all } from 'redux-saga/effects';
import { callToAPIWatcher } from '../HandleAPICalls/saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([callToAPIWatcher()]);
}
