import { combineReducers } from 'redux';
import dogsReducer from '../containers/dogs/list/reducer';
import dogsItemReducer from '../containers/dogs/item/reducer';

export default combineReducers({
  dogsState: dogsReducer,
  dogState: dogsItemReducer,
});