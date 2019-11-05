import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledParam,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSelect,
} from './styles.js';

const Input = ({ name, value, onChange }) => (
  <StyledInput
    className='dog-form__field'
    type='text'
    name={name}
    value={value}
    onChange={onChange}
  />
);

const Textarea = ({ name, value, onChange }) => (
  <StyledTextarea
    className='dog-form__field'
    name={name}
    value={value}
    onChange={onChange}
  />
);

const Select = ({ name, value, options, onChange }) => (
  <StyledSelect
    className='dog-form__field'
    name={name}
    value={value}
    onChange={onChange}
  >
    {
      options.map((option, index) =>
        <option key={index} value={option.value}>{option.label}</option>
      )
    }
  </StyledSelect>
);

const DogFormParam = ({
  isEditing,
  fieldId,
  label,
  value,
  type,
  options,
  onChange,
}) => {
  const renderFieldEditMode = () => {
    switch (type) {
      case 'input':
      case 'link':
        return <Input name={fieldId} value={value} onChange={onChange} />
    
      case 'textarea':
        return <Textarea name={fieldId} value={value} onChange={onChange} />
    
      case 'select':
        return <Select name={fieldId} value={value} options={options} onChange={onChange} />
    
      default:
        break;
    }
  };

  const renderFieldViewMode = () => (
    (type === 'link')
      ? <a href={value}>{value}</a>
      : <div>{String(value)}</div>
  );

  return(
    <StyledParam>
      <StyledLabel>{label}</StyledLabel>
      {
        isEditing
        ? renderFieldEditMode()
        : renderFieldViewMode()
      }
    </StyledParam>
  );
};

DogFormParam.propTypes = {
  isEditing: PropTypes.bool,
  fieldId: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  type: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default DogFormParam;