import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const DogsTable = (props) => {
  const {
    dogsList,
    isLoading,
    columns,
    onRowClick,
  } = props;

  const renderRow = (item) => {
    const handleClick = () => onRowClick({ id: item.chipId });

    return (
      <div className='dogs-table__row' onClick={handleClick} key={item.chipId}>
        {
          columns.map((field, index) => (
            <div className="dogs-table__cell" key={index}>{item[field.id]}</div>
          ))
        }
      </div>
    )
  }

  return (
    <div className='dogs-table'>
      <div className='dogs-table__row _head'>
        {
          columns.map((field, index) => (
            <div className="dogs-table__cell" key={index}>{field.text}</div>
          ))
        }
      </div>
      
      {
        isLoading 
          ? <div className='loading'>loading...</div>
          : dogsList.map(renderRow) // внутрь renderRow придут 3 аргумента из метода .map() - item, index, array
      }      
    </div>
  )
};

DogsTable.propTypes = {
  dogsList: PropTypes.array,
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default DogsTable;