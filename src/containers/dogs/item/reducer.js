import { ACTIONS } from './constants';

const initialState = {
  dogData: {
    name: null,
    age: null,
  },
  isLoading: false,
  error: null,
};

const dogsItemReducer = (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ACTIONS.DOGS_ITEM_GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.DOGS_ITEM_GET_DATA_SUCCESS:
      return {
        ...state,
        dogData: payload.dogData,
        isLoading: false,
      };
    
    case ACTIONS.DOGS_ITEM_GET_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};

export default dogsItemReducer;