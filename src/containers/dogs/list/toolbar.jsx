import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
  const {
    sortParams,
    groupParams,
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

  return (
    <div className='toolbar'>
      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Сортировка:</label>
        <select defaultValue={sortParams.activeTypeId} onChange={handleSortChange}>
          {
            sortParams.typesList.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </div>

      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Группировка:</label>
        <select defaultValue={groupParams.activeTypeId} onChange={handleGroupChange}>
          {
            groupParams.typesList.map(item => 
              <option key={item.id} value={item.id}>{item.label}</option>
            )
          }
        </select>
      </div>

      <div className='toolbar__item'>
        <label className='toolbar__item-label'>Поиск:</label>
        <input type='text' />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  sortParams: PropTypes.shape({
    typesList: PropTypes.array,
    activeTypeId: PropTypes.string,
  }),
  groupParams: PropTypes.shape({
    typesList: PropTypes.array,
    activeTypeId: PropTypes.string,
  }),
};

export default Toolbar;