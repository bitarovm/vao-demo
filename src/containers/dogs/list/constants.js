export const ACTION_TYPES = {
  DOGS_LIST_GET_DATA_REQUEST: 'DOGS_LIST_GET_DATA_REQUEST',
  DOGS_LIST_GET_DATA_SUCCESS: 'DOGS_LIST_GET_DATA_SUCCESS',
  DOGS_LIST_GET_DATA_FAIL: 'DOGS_LIST_GET_DATA_FAIL',
  
  DOGS_LIST_CHANGE_SORT: 'DOGS_LIST_CHANGE_SORT',
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

export const SORT_TYPES = [
  {
    id: 'nameAsc',
    label: 'Имя (asc)',
    fieldId: 'name',
    direction: 'asc',
  },
  {
    id: 'nameDesc',
    label: 'Имя (desc)',
    fieldId: 'name',
    direction: 'desc',
  },
  {
    id: 'ageAsc',
    label: 'Год рождения (asc)',
    fieldId: 'age',
    direction: 'asc',
  },
  {
    id: 'ageDesc',
    label: 'Год рождения (desc)',
    fieldId: 'age',
    direction: 'desc',
  },
];