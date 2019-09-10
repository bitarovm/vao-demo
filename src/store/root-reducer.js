import { combineReducers } from 'redux';
import dogsReducer from '../containers/dogs/list/reducer';

export default combineReducers({
  dogsState: dogsReducer,
});