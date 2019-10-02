import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Toolbar = ({ onToolbarItemClick }) => {
  const onBackClick = () => onToolbarItemClick({ id: 'back' });
  
  return (
    <div className="toolbar">
      <button onClick={onBackClick}>Back</button>
    </div>
  )
};

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

class Container extends Component {
  
  componentDidMount() {
    const { fetchDogData, location } = this.props;
    const dogChipId = location.pathname.substr(5);
    fetchDogData(dogChipId);
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleToolbarItemClick = ({ id }) => {
    switch (id) {
      case 'back':
        this.handleGoBack();
        break;

      default:
        break;
    }
  };

  render() {
    const {
      dogData,
      isLoading,
      error,
      fields,
    } = this.props;

    if (isLoading) {
      return 'loading...'
    };

    if (error) {
      return `Error: ${error}`;
    }

    return (
      <>
        <Toolbar onToolbarItemClick={this.handleToolbarItemClick}/>
        <DogForm dogData={dogData} fields={fields}/>
      </>
    );
  }
};

Container.propTypes = {
  dogData: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fields: PropTypes.array,

  fetchDogData: PropTypes.func,
};

export default Container;