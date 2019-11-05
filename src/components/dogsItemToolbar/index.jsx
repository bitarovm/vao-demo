import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledToolbar,
  StyledToolbarButton,
} from './styles.js';

const Toolbar = ({
  isEditing,
  onToolbarItemClick,
}) => {
  const onBackClick = () => onToolbarItemClick({ id: 'back' });
  const onEditClick = () => onToolbarItemClick({ id: 'edit' });
  
  return (
    <StyledToolbar>
      <StyledToolbarButton onClick={onBackClick}>Назад</StyledToolbarButton>
      <StyledToolbarButton onClick={onEditClick} disabled={isEditing}>Изменить</StyledToolbarButton>
    </StyledToolbar>
  );
};

Toolbar.propTypes = {
  onToolbarItemClick: PropTypes.func,
};

export default Toolbar;