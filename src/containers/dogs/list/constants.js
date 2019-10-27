export const ACTION_TYPES = {
  DOGS_LIST_GET_DATA_REQUEST: 'DOGS_LIST_GET_DATA_REQUEST',
  DOGS_LIST_GET_DATA_SUCCESS: 'DOGS_LIST_GET_DATA_SUCCESS',
  DOGS_LIST_GET_DATA_FAIL: 'DOGS_LIST_GET_DATA_FAIL',
  
  DOGS_LIST_CHANGE_SORT: 'DOGS_LIST_CHANGE_SORT',
  DOGS_LIST_CHANGE_GROUP: 'DOGS_LIST_CHANGE_GROUP',
  DOGS_LIST_CHANGE_SEARCH: 'DOGS_LIST_CHANGE_SEARCH',
};

export const DOGS_LIST_COLUMNS = [
  {
    id: 'chipId',
    text: 'ИД',
    visible: true,
  },
  {
    id: 'name',
    text: 'Имя',
    visible: true,
  },
  {
    id: 'birthday',
    text: 'Год рождения',
    visible: true,
  },
  {
    id: 'avairy',
    text: 'Вольер',
    visible: true,
  },
  {
    id: 'sex',
    text: 'Пол',
    visible: true,
  },
];

export const SORT_TYPES = [
  {
    id: 'nameAsc',
    label: 'Имя (возр)',
    fieldId: 'name',
    direction: 'asc',
  },
  {
    id: 'nameDesc',
    label: 'Имя (убыв)',
    fieldId: 'name',
    direction: 'desc',
  },
  {
    id: 'birthdayAsc',
    label: 'Год рождения (возр)',
    fieldId: 'birthday',
    direction: 'asc',
  },
  {
    id: 'birthdayDesc',
    label: 'Год рождения (убыв)',
    fieldId: 'birthday',
    direction: 'desc',
  },
];

export const GROUP_TYPES = [
  {
    id: 'avairy',
    label: 'Вольер',
  },
  {
    id: 'walkingGroup',
    label: 'Выгул',
  },
];