import { TableColumnsTypes } from 'types/constants/constantsTypes';

const TABLE_HEADER: readonly TableColumnsTypes[] = [
  {
    key: 'title',
    label: 'Title',
    minWidth: 170
  },
  {
    key: 'content',
    label: 'Content',
    minWidth: 200
  }
];

export default TABLE_HEADER;
