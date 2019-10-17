import { ACTION_TYPES } from './constants';
import { fetchDogsList } from '../../../backend/dogsList';

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

export const fetchDogDataAction = (dogChipId) => {
  return (dispatch) => {
    dispatch(dogsItemGetDataRequest());

    fetchDogsList()
      .then(dogs => {
        const dogData = dogs.find(dog => dog.chipId === dogChipId);
        return dispatch(dogsItemGetDataSuccess(dogData));
      })
      .catch(error => dispatch(dogsItemGetDataFail(error)));
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