import React from 'react';
import PropTypes from 'prop-types';
import DogsTable from '../dogsTable';

import './styles.css';

const DogsGroup = (props) => {
  const {
    title,
    items,
    isLoading,
    columns,
    onItemClick,
  } = props;
  
  return (
    <div className="group">
      {title && <div className="title">{title}</div>}

      <DogsTable
        dogsList={items}
        isLoading={isLoading}
        columns={columns}
        onRowClick={onItemClick}
      />
    </div>
  );
};

DogsGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  onItemClick: PropTypes.func,
};

export default DogsGroup;