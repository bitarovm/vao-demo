export const ACTION_TYPES = {
  DOGS_ITEM_GET_DATA_REQUEST: 'DOGS_ITEM_GET_DATA_REQUEST',
  DOGS_ITEM_GET_DATA_SUCCESS: 'DOGS_ITEM_GET_DATA_SUCCESS',
  DOGS_ITEM_GET_DATA_FAIL: 'DOGS_ITEM_GET_DATA_FAIL',

  DOGS_ITEM_CHANGE_MODE_TO_EDIT: 'DOGS_ITEM_CHANGE_MODE_TO_EDIT',
  DOGS_ITEM_CHANGE_MODE_TO_VIEW: 'DOGS_ITEM_CHANGE_MODE_TO_VIEW',
  DOGS_ITEM_CHANGE_FIELD_VALUE: 'DOGS_ITEM_CHANGE_FIELD_VALUE',
};

export const DOGS_ITEM_FIELDS = [
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
    id: 'sex',
    text: 'Пол',
    visible: true,
  },
  {
    id: 'description',
    text: 'Описание',
    visible: true,
  },
  {
    id: 'row',
    text: 'Ряд',
    visible: true,
  },
  {
    id: 'avairy',
    text: 'Вольер',
    visible: true,
  },
  {
    id: 'catalogLink',
    text: 'Ссылка',
    visible: true,
  },
  {
    id: 'chipId',
    text: 'ИД',
    visible: true,
  },
  {
    id: 'isWalking',
    text: 'Гуляет',
    visible: true,
  },
  {
    id: 'shelterDay',
    text: 'Дата вылова',
    visible: true,
  },
  {
    id: 'status',
    text: 'Статус',
    visible: true,
  },
  {
    id: 'walkingGroup',
    text: 'Группа выгула',
    visible: true,
  },
];