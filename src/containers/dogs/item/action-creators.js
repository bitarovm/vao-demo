import { ACTION_TYPES } from './constants';

const dogData = {
  id: 1,
  name: 'Martin',
  age: 8,
  yearTrapping: 2015,
};

export const fetchDogData = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.DOGS_ITEM_GET_DATA_REQUEST,
    });

    setTimeout(() => {
      dispatch({
        type: ACTION_TYPES.DOGS_ITEM_GET_DATA_SUCCESS,
        payload: {
          dogData,
        },
      })
    }, 3000);
  };
};