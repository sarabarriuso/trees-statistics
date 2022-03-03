import { combineReducers } from 'redux';
import treesReducer from './bundles/treesBundle';

export default combineReducers({
  treesState: treesReducer,
});
