import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import { DevsTypes } from './types';

function* fetchDevs() {
  try {
    const { data } = yield call(api.get, '/devs');

    yield put({ type: DevsTypes.FETCH_SUCCESS, payload: { data } });
  } catch (err) {
    console.log(err);

    yield put({ type: DevsTypes.FETCH_FAILURE });
  }
}

function* storeDev({ payload: { formData } }: AnyAction) {
  try {
    const { data } = yield call(api.post, '/devs', formData);

    yield put({ type: DevsTypes.STORE_SUCCESS, payload: { data } });
  } catch (err) {
    console.log(err);
  }
}

export default function* devSaga() {
  yield all([
    takeLatest(DevsTypes.FETCH_REQUEST, fetchDevs),
    takeLatest(DevsTypes.STORE_REQUEST, storeDev),
  ]);
}
