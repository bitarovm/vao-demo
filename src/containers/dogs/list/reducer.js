import {
  ACTION_TYPES,
  DOGS_LIST_COLUMNS,
  SORT_TYPES,
  GROUP_TYPES,
} from './constants';

const initialState = {
  dogsList: [],
  isLoading: false,
  error: null,
  columns: DOGS_LIST_COLUMNS,
  sortParams: {
    items: SORT_TYPES,
    activeItemId: 'ageAsc',
  },
  groupParams: {
    items: GROUP_TYPES,
    activeItemId: 'avairy',
  },
  searchString: '',
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
          activeItemId: payload.activeItemId,
        },
      };

    case ACTION_TYPES.DOGS_LIST_CHANGE_GROUP:
      return {
        ...state,
        groupParams: {
          ...state.groupParams,
          activeItemId: payload.activeItemId,
        },
      };

    case ACTION_TYPES.DOGS_LIST_CHANGE_SEARCH:
      return {
        ...state,
        searchString: payload.searchString,
      };

    default:
      return state;
  }
};

export default dogsListReducer;