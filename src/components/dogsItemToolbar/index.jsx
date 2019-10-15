import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Toolbar = (props) => {
  const { onToolbarItemClick } = props;
  const onBackClick = () => onToolbarItemClick({ id: 'back' });
  
  return (
    <div className="toolbar">
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

Toolbar.propTypes = {
  onToolbarItemClick: PropTypes.func,
};

export default Toolbar;