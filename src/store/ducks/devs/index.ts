import { Reducer } from 'redux';

import { DevsTypes, DevsState } from './types';

const INITIAL_STATE: DevsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<DevsState> = (state = INITIAL_STATE, action) => {
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
    case DevsTypes.STORE_SUCCESS:
      return { ...state, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
};

export default reducer;
