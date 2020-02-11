import { all, takeLatest } from 'redux-saga/effects';

import { DevsTypes } from './devs/types';
import { fetchDevs } from './devs/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(DevsTypes.FETCH_REQUEST, fetchDevs),
  ]);
}
