import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { DevsTypes } from './types';

export function* fetchDevs() {
  try {
    const { data } = yield call(api.get, '/devs');

    yield put({ type: DevsTypes.FETCH_SUCCESS, payload: { data } });
  } catch (err) {
    yield put({ type: DevsTypes.FETCH_FAILURE });
  }
}
