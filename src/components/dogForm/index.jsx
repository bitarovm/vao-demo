import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const DogForm = (props) => {
  const {
    dogData,
    fields,
  } = props;

  return (
    <div className="dog-form">
      <div className="dog-form__image"></div>
      
      <div className="dog-form__data">
        {
          fields.map((field, index) => (
            <div className="dog-form__param" key={index}>
              <div className="dog-form__label">{field.text}</div>
              <div className="dog-form__value">{dogData[field.id]}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

DogForm.propTypes = {
  dogData: PropTypes.object,
  fields: PropTypes.array,
};

export default DogForm;