import { ACTION_TYPES } from './constants';
import { fetchDogsList } from '../../../backend/dogsList';

const dogsListGetDataRequest = () => ({
  type: ACTION_TYPES.DOGS_LIST_GET_DATA_REQUEST,
});

const dogsListGetDataSuccess = (dogsList) => ({
  type: ACTION_TYPES.DOGS_LIST_GET_DATA_SUCCESS,
  payload: {
    dogsList,
  }
});

const dogsListGetDataFail = (error) => ({
  type: ACTION_TYPES.DOGS_LIST_GET_DATA_FAIL,
  error,
});

export const fetchDogsListAction = () => {
  return (dispatch) => {
    dispatch(dogsListGetDataRequest());
    
    fetchDogsList()
      .then(data => dispatch(dogsListGetDataSuccess(data)))
      .catch(error => dispatch(dogsListGetDataFail(error)));
  };
};

export const dogsListChangeSort = (activeTypeId) => ({
  type: ACTION_TYPES.DOGS_LIST_CHANGE_SORT,
  payload: {
    activeTypeId,
  },
});
