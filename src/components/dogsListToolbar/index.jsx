import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledToolbar,
  StyledToolbarItem,
  StyledToolbarLabel,
} from './styles.js';

const Toolbar = ({
  sortParams,
  groupParams,
  searchString,
  onParamsChange
}) => {
  const handleSortChange = event => {
    onParamsChange({
      fieldId: 'sort',
      fieldValue: event.target.value,
    });
  };

  const handleGroupChange = event => {
    onParamsChange({
      fieldId: 'group',
      fieldValue: event.target.value,
    });
  };

  const handleSearchChange = event => {
    onParamsChange({
      fieldId: 'search',
      fieldValue: event.target.value,
    });
  };

  return (
    <StyledToolbar>
      <StyledToolbarItem>
        <StyledToolbarLabel>Сортировка:</StyledToolbarLabel>
        <select defaultValue={sortParams.fieldId} onChange={handleSortChange}>
          {
            sortParams.items.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </StyledToolbarItem>

      <StyledToolbarItem>
        <StyledToolbarLabel>Группировка:</StyledToolbarLabel>
        <select defaultValue={groupParams.fieldId} onChange={handleGroupChange}>
          {
            groupParams.items.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </StyledToolbarItem>

      <StyledToolbarItem>
        <StyledToolbarLabel>Поиск:</StyledToolbarLabel>
        <input type='text' value={searchString} onChange={handleSearchChange} />
      </StyledToolbarItem>
    </StyledToolbar>
  );
};

Toolbar.propTypes = {
  sortParams: PropTypes.shape({
    items: PropTypes.array,
    fieldId: PropTypes.string,
  }),
  groupParams: PropTypes.shape({
    items: PropTypes.array,
    fieldId: PropTypes.string,
  }),
  searchString: PropTypes.string,
};

export default Toolbar;