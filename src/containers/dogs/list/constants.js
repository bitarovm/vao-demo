export const ACTION_TYPES = {
  DOGS_LIST_GET_DATA_REQUEST: 'DOGS_LIST_GET_DATA_REQUEST',
  DOGS_LIST_GET_DATA_SUCCESS: 'DOGS_LIST_GET_DATA_SUCCESS',
  DOGS_LIST_GET_DATA_FAIL: 'DOGS_LIST_GET_DATA_FAIL',
};

export const DOGS_LIST_COLUMNS = [
  {
    id: 'chipId',
    text: 'ИД',
    visible: true,
  },
  {
    id: 'name',
    text: 'имя',
    visible: true,
  },
  {
    id: 'birthday',
    text: 'год рождения',
    visible: true,
  },
  {
    id: 'avairy',
    text: 'вольер',
    visible: true,
  },
  {
    id: 'sex',
    text: 'пол',
    visible: true,
  },
];