import { ACTION_TYPES } from './constants';
import {
  fetchDogById,
  saveDogData,
} from '../../../backend';

const dogsItemGetDataRequest = () => ({
  type: ACTION_TYPES.DOGS_ITEM_GET_DATA_REQUEST,
});

const dogsItemGetDataSuccess = (dogData) => ({
  type: ACTION_TYPES.DOGS_ITEM_GET_DATA_SUCCESS,
  payload: {
    dogData,
  },
});

const dogsItemGetDataFail = (error) => ({
  type: ACTION_TYPES.DOGS_ITEM_GET_DATA_FAIL,
  error,
});

export const fetchDogDataAction = (chipId) => {
  return (dispatch) => {
    dispatch(dogsItemGetDataRequest());

    fetchDogById(chipId)
      .then(dogData => dispatch(dogsItemGetDataSuccess(dogData)))
      .catch(error => dispatch(dogsItemGetDataFail(error)));
  };
};

const dogsItemSaveDogDataRequest = () => ({
  type: ACTION_TYPES.DOGS_ITEM_SAVE_DATA_REQUEST,
});

const dogsItemSaveDogDataSuccess = (dogData) => ({
  type: ACTION_TYPES.DOGS_ITEM_SAVE_DATA_SUCCESS,
  payload: {
    dogData,
  },
});

const dogsItemSaveDogDataFail = (error) => ({
  type: ACTION_TYPES.DOGS_ITEM_SAVE_DATA_FAIL,
  error,
});

export const saveDogDataAction = (dogData) => {
  return (dispatch) => {
    dispatch(dogsItemSaveDogDataRequest());

    saveDogData(dogData)
      .then(chipId => {
        dispatch(dogsItemSaveDogDataSuccess(chipId));
        dispatch(fetchDogDataAction(chipId));
      })
      .catch(error => dispatch(dogsItemSaveDogDataFail(error)));
  };
};

export const dogsItemChangeModeToEditAction = () => ({
  type: ACTION_TYPES.DOGS_ITEM_CHANGE_MODE_TO_EDIT,
  payload: {},
});

export const dogsItemChangeModeToViewAction = () => ({
  type: ACTION_TYPES.DOGS_ITEM_CHANGE_MODE_TO_VIEW,
  payload: {},
});
  
export const dogsItemChangeFieldValueAction = (dogData) => ({
  type: ACTION_TYPES.DOGS_ITEM_CHANGE_FIELD_VALUE,
  payload: {
    ...dogData,
  },
});