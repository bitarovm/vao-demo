import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

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
    <div className='toolbar'>
      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Сортировка:</label>
        <select defaultValue={sortParams.fieldId} onChange={handleSortChange}>
          {
            sortParams.items.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </div>

      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Группировка:</label>
        <select defaultValue={groupParams.fieldId} onChange={handleGroupChange}>
          {
            groupParams.items.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </div>

      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Поиск:</label>
        <input type='text' value={searchString} onChange={handleSearchChange} />
      </div>
    </div>
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