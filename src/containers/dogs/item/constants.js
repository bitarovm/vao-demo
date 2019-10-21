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
    type: 'input',
  },
  {
    id: 'birthday',
    text: 'Год рождения',
    type: 'input',
  },
  {
    id: 'sex',
    text: 'Пол',
    type: 'select',
  },
  {
    id: 'row',
    text: 'Ряд',
    type: 'input',
  },
  {
    id: 'avairy',
    text: 'Вольер',
    type: 'input',
  },
  {
    id: 'catalogLink',
    text: 'Ссылка',
    type: 'input',
  },
  {
    id: 'chipId',
    text: 'ИД',
    type: 'input',
  },
  {
    id: 'isWalking',
    text: 'Гуляет',
    type: 'select',
  },
  {
    id: 'shelterDay',
    text: 'Дата вылова',
    type: 'input',
  },
  {
    id: 'status',
    text: 'Статус',
    type: 'select',
  },
  {
    id: 'walkingGroup',
    text: 'Группа выгула',
    type: 'select',
  },
  {
    id: 'description',
    text: 'Описание',
    type: 'textarea',
  },
];

export const DICTIONARIES = {
  sex: [
    {
      label: 'мужской',
      value: 'male',
    },
    {
      label: 'женский',
      value: 'female',
    },
  ],
  isWalking: [
    {
      label: 'да',
      value: true,
    },
    {
      label: 'нет',
      value: false,
    },
  ],
  status: [
    {
      label: 'healthy',
      value: 'healthy',
    },
    {
      label: 'hospice',
      value: 'hospice',
    },
    {
      label: 'insulator',
      value: 'insulator',
    },
    {
      label: 'supervised',
      value: 'supervised',
    },
    {
      label: 'dead',
      value: 'dead',
    },
  ],
  walkingGroup: [
    {
      label: 'Выгул №1',
      value: '1',
    },
    {
      label: 'Выгул №2',
      value: '2',
    },
    {
      label: 'Выгул №3',
      value: '3',
    },
    {
      label: 'Выгул №4',
      value: '4',
    },
    {
      label: 'Не гуляет',
      value: 'null',
    },
  ],
};