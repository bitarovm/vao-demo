import {
  ACTION_TYPES,
  DOGS_ITEM_FIELDS,
} from './constants';

const initialState = {
  dogData: {},
  isLoading: false,
  error: null,
  isEditing: false,
  fields: DOGS_ITEM_FIELDS,
};

const dogsItemReducer = (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ACTION_TYPES.DOGS_ITEM_GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.DOGS_ITEM_GET_DATA_SUCCESS:
      return {
        ...state,
        dogData: payload.dogData,
        isLoading: false,
      };
    
    case ACTION_TYPES.DOGS_ITEM_GET_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error,
      };

      case ACTION_TYPES.DOGS_ITEM_EDIT_DATA:
        return {
          ...state,
          isEditing: payload.isEditing,
        };

      case ACTION_TYPES.DOGS_ITEM_CHANGE_FIELD_VALUE:
        return {
          ...state,
          dogData: {
            ...state.dogData,
            [payload.fieldName]: payload.fieldValue,
          },
        };

    default:
      return state;
  }
};

export default dogsItemReducer;