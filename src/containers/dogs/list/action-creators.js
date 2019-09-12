import { ACTION_TYPES } from './constants';

const dogsList = [
  {
    id: 1,
    name: 'Martin',
    age: 8,
  },
  {
    id: 2,
    name: 'Mayram',
    age: 7,
  }
];

export const fetchDogsList = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.DOGS_LIST_GET_DATA_REQUEST,
    });
    
    setTimeout(() => {
      dispatch({
        type: ACTION_TYPES.DOGS_LIST_GET_DATA_SUCCESS,
        payload: {
          dogsList,
        }
      });
    }, 2000);
  };
};