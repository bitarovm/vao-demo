import React from 'react';
import PropTypes from 'prop-types';
import DogFormParam from '../dogFormParam';

import './styles.css';

const DogForm = (props) => {
  const {
    dogData,
    isEditing,
    fields,
    dictionaries,
    onDataChange,
    onButtonClick,
    onSubmit,
  } = props;
  
  const handleChange = (event) => {
    const { name, value, } = event.target;

    onDataChange({
      fieldName: name,
      fieldValue: value,
    });
  };

  const onCancelClick = () => onButtonClick({ id: 'cancel' });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(dogData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="dog-form">
        <div className="dog-form__image"></div>
        
        <div className="dog-form__data">
            {
              fields.map(({ id: fieldId, text: fieldLabel, type: fieldType }, index) => 
                <DogFormParam
                  key={index}
                  isEditing={isEditing}
                  fieldId={fieldId} 
                  label={fieldLabel}
                  value={dogData[fieldId]}
                  type={fieldType}
                  options={dictionaries[fieldId]}
                  onChange={handleChange}
                />
              )
            }
        </div>
      </div>

      {
        isEditing &&
          <>
            <button className="dog-form__button" onClick={onCancelClick}>Отменить</button>
            <button className="dog-form__button" type="submit">Сохранить</button>
          </>
      }
    </form>

  );
};

DogForm.propTypes = {
  dogData: PropTypes.object,
  isEditing: PropTypes.bool,
  fields: PropTypes.array,
  dictionaries: PropTypes.object,
  onDataChange: PropTypes.func,
  onButtonClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default DogForm;