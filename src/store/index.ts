import { createStore, Store } from 'redux';

import { DevsState } from './ducks/devs/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
    devs: DevsState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
