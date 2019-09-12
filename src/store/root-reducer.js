import { combineReducers } from 'redux';
import dogsListReducer from '../containers/dogs/list/reducer';
import dogsItemReducer from '../containers/dogs/item/reducer';

export default combineReducers({
  dogsListState: dogsListReducer,
  dogsItemState: dogsItemReducer,
});