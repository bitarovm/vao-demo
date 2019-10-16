import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Toolbar = (props) => {
  const {
    isEditing,
    onToolbarItemClick,
  } = props;

  const onBackClick = () => onToolbarItemClick({ id: 'back' });
  const onEditClick = () => onToolbarItemClick({ id: 'edit' });
  
  return (
    <div className="toolbar">
      <button onClick={onBackClick}>Back</button>
      <button onClick={onEditClick}>
        { isEditing ? 'Cancel' : 'Edit' }
      </button>
    </div>
  );
};

Toolbar.propTypes = {
  onToolbarItemClick: PropTypes.func,
};

export default Toolbar;