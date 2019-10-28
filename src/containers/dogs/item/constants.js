import {
  DOGS_FIELDS_ID,
  DOGS_FIELDS,
} from '../../../constants';

export const ACTION_TYPES = {
  DOGS_ITEM_GET_DATA_REQUEST: 'DOGS_ITEM_GET_DATA_REQUEST',
  DOGS_ITEM_GET_DATA_SUCCESS: 'DOGS_ITEM_GET_DATA_SUCCESS',
  DOGS_ITEM_GET_DATA_FAIL: 'DOGS_ITEM_GET_DATA_FAIL',

  DOGS_ITEM_SAVE_DATA_REQUEST: 'DOGS_ITEM_SAVE_DATA_REQUEST',
  DOGS_ITEM_SAVE_DATA_SUCCESS: 'DOGS_ITEM_SAVE_DATA_SUCCESS',
  DOGS_ITEM_SAVE_DATA_FAIL: 'DOGS_ITEM_SAVE_DATA_FAIL',

  DOGS_ITEM_CHANGE_MODE_TO_EDIT: 'DOGS_ITEM_CHANGE_MODE_TO_EDIT',
  DOGS_ITEM_CHANGE_MODE_TO_VIEW: 'DOGS_ITEM_CHANGE_MODE_TO_VIEW',
  DOGS_ITEM_CHANGE_FIELD_VALUE: 'DOGS_ITEM_CHANGE_FIELD_VALUE',
};

export const DOGS_ITEM_FIELDS = {
  [DOGS_FIELDS_ID.NAME]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.NAME],
    type: 'input',
  },
  [DOGS_FIELDS_ID.BIRTHDAY]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.BIRTHDAY],
    type: 'input',
  },
  [DOGS_FIELDS_ID.SEX]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.SEX],
    type: 'select',
  },
  [DOGS_FIELDS_ID.ROW]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.ROW],
    type: 'input',
  },
  [DOGS_FIELDS_ID.AVAIRY]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.AVAIRY],
    type: 'input',
  },
  [DOGS_FIELDS_ID.CATALOG_LINK]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.CATALOG_LINK],
    type: 'link',
  },
  [DOGS_FIELDS_ID.CHIP_ID]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.CHIP_ID],
    type: 'input',
  },
  [DOGS_FIELDS_ID.ISWALKING]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.ISWALKING],
    type: 'select',
  },
  [DOGS_FIELDS_ID.SHELTERDAY]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.SHELTERDAY],
    type: 'input',
  },
  [DOGS_FIELDS_ID.STATUS]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.STATUS],
    type: 'select',
  },
  [DOGS_FIELDS_ID.WALKING_GROUP]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.WALKING_GROUP],
    type: 'select',
  },
  [DOGS_FIELDS_ID.DESCRIPTION]: {
    ...DOGS_FIELDS[DOGS_FIELDS_ID.DESCRIPTION],
    type: 'textarea',
  },
}

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
      value: 'здоровая',
    },
    {
      label: 'hospice',
      value: 'хоспис',
    },
    {
      label: 'insulator',
      value: 'изолятор',
    },
    {
      label: 'supervised',
      value: 'supervised',
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