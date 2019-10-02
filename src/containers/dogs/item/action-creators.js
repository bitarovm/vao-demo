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

export const fetchDogData = (dogChipId) => {
  return (dispatch) => {
    dispatch(dogsItemGetDataRequest());

    fetchDogsList()
      .then(dogs => {
        const dogData = dogs.find(dog => dog.chipId === dogChipId);
        // console.log('dogData:', dogData);
        return dispatch(dogsItemGetDataSuccess(dogData));
      })
      .catch(error => dispatch(dogsItemGetDataFail(error)));
  };
};