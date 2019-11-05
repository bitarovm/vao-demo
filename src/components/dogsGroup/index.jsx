import React from 'react';
import PropTypes from 'prop-types';
import DogsTable from '../dogsTable';

import {
  StyledGroup,
  StyledTitle,
} from './styles.js';

const DogsGroup = ({
  title,
  items,
  isLoading,
  columns,
  onItemClick,
}) => (
  <StyledGroup>
    {title && <StyledTitle>{title}</StyledTitle>}

    <DogsTable
      dogsList={items}
      isLoading={isLoading}
      columns={columns}
      onRowClick={onItemClick}
    />
  </StyledGroup>
  );

DogsGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  onItemClick: PropTypes.func,
};

export default DogsGroup;