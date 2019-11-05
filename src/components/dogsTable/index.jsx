import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledDogsTable,
  StyledDogsTableCell,
  StyledDogsTableLoading,
  StyledDogsTableRow,
  StyledDogsTableRowHead,
} from './styles.js';

const DogsTable = ({
  dogsList,
  isLoading,
  columns,
  onRowClick,
}) => {
  const renderRow = item => {
    const handleClick = () => onRowClick({ id: item.chipId });

    return (
      <StyledDogsTableRow onClick={handleClick} key={item.chipId}>
        {
          columns.map((field, index) => (
            <StyledDogsTableCell key={index}>{item[field.id]}</StyledDogsTableCell>
          ))
        }
      </StyledDogsTableRow>
    )
  }

  return (
    <StyledDogsTable>
      <StyledDogsTableRowHead>
        {
          columns.map((field, index) => (
            <StyledDogsTableCell key={index}>{field.text}</StyledDogsTableCell>
          ))
        }
      </StyledDogsTableRowHead>
      
      {
        isLoading 
          ? <StyledDogsTableLoading>loading...</StyledDogsTableLoading>
          : dogsList.map(renderRow) // внутрь renderRow придут 3 аргумента из метода .map() - item, index, array
      }      
    </StyledDogsTable>
  )
};

DogsTable.propTypes = {
  dogsList: PropTypes.array,
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default DogsTable;