import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
  const {
    sortParams,
    groupParams,
    searchString,
    onParamsChange
  } = props;

  const handleSortChange = (event) => {
    onParamsChange({
      fieldId: 'sort',
      fieldValue: event.target.value,
    });
  };

  const handleGroupChange = (event) => {
    onParamsChange({
      fieldId: 'group',
      fieldValue: event.target.value,
    });
  };

  const handleSearchChange = (event) => {
    onParamsChange({
      fieldId: 'search',
      fieldValue: event.target.value,
    });
  };

  return (
    <div className='toolbar'>
      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Сортировка:</label>
        <select defaultValue={sortParams.activeItemId} onChange={handleSortChange}>
          {
            sortParams.items.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </div>

      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Группировка:</label>
        <select defaultValue={groupParams.activeItemId} onChange={handleGroupChange}>
          {
            groupParams.items.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </div>

      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Поиск:</label>
        <input type='text' valeu={searchString} onChange={handleSearchChange} />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  sortParams: PropTypes.shape({
    items: PropTypes.array,
    activeItemId: PropTypes.string,
  }),
  groupParams: PropTypes.shape({
    items: PropTypes.array,
    activeItemId: PropTypes.string,
  }),
  searchString: PropTypes.string,
};

export default Toolbar;