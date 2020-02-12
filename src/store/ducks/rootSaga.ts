import { all } from 'redux-saga/effects';

import devSaga from './devs/sagas';

export default function* rootSaga() {
  return yield all([
    devSaga(),
  ]);
}
