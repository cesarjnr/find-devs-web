import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { DevsTypes } from './types';

export function* fetchDevs() {
  try {
    const response = yield call(api.get, '/devs');

    yield put({ type: DevsTypes.FETCH_SUCCESS, payload: response.data });
  } catch (err) {
    yield put({ type: DevsTypes.FETCH_FAILURE });
  }
}
