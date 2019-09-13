import {
  ACTION_TYPES,
  DOGS_LIST_COLUMNS,
  SORT_TYPES,
} from './constants';

const initialState = {
  dogsList: [],
  isLoading: false,
  error: null,
  columns: DOGS_LIST_COLUMNS,
  toolbarParams: {}, //delete
  sortParams: {
    typesList: SORT_TYPES,
    activeTypeId: 'ageAsc',
  },
};

const dogsListReducer = (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ACTION_TYPES.DOGS_LIST_GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.DOGS_LIST_GET_DATA_SUCCESS:
      return {
        ...state,
        dogsList: payload.dogsList,
        isLoading: false,
      };

    case ACTION_TYPES.DOGS_LIST_GET_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error,
      };

    case ACTION_TYPES.DOGS_LIST_CHANGE_SORT:
      return {
        ...state,
        sortParams: {
          ...state.sortParams,
          activeTypeId: payload.activeTypeId,
        },
      };

    default:
      return state;
  }
};

export default dogsListReducer;