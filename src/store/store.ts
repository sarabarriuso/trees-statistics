import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import IState from './state';

const store: Store<IState> = createStore(rootReducer, composeWithDevTools());

export default store;
