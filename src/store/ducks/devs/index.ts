import { Reducer } from 'redux';

import { DevsTypes, DevsStateInterface } from './types';

const INITIAL_STATE: DevsStateInterface = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<DevsStateInterface> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DevsTypes.FETCH_REQUEST:
      return { ...state, loading: true };
    case DevsTypes.FETCH_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case DevsTypes.FETCH_FAILURE:
      return {
        ...state, loading: false, error: false, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
