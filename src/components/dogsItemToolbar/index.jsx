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
  const onCancelClick = () => onToolbarItemClick({ id: 'cancel' });
  
  return (
    <div className="toolbar">
      <button onClick={onBackClick}>Back</button>
      {
        isEditing
          ? <button onClick={onCancelClick}>Cancel</button>
          : <button onClick={onEditClick}>Edit</button>
      }
    </div>
  );
};

Toolbar.propTypes = {
  onToolbarItemClick: PropTypes.func,
};

export default Toolbar;