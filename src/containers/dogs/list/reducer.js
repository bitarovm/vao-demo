import { ACTIONS } from './constants';

const initialState = {
  dogsList: [],
  isLoading: false,
  error: null,
};

export default function dogsReducer(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case ACTIONS.DOGS_LIST_GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.DOGS_LIST_GET_DATA_SUCCESS:
      return {
        ...state,
        dogsList: payload.dogsList,
        isLoading: false,
      };

    case ACTIONS.DOGS_LIST_GET_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};