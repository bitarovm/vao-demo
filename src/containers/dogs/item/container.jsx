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

const DogForm = ({ name, age }) => {
  return (
    <div className="dog-form">
      <div className="dog-form__image"></div>
      
      <div className="dog-form__data">
        <div className="dog-form__param">
          <div className="dog-form__label">Имя</div>
          <div className="dog-form__value">{name}</div>
        </div>

        <div className="dog-form__param">
          <div className="dog-form__label">Возраст</div>
          <div className="dog-form__value">{age}</div>
        </div>
      </div>
    </div>
  );
};

class Container extends Component {
  
  componentDidMount() {
    this.props.fetchDogData();
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
    const { dogData, isLoading, error } = this.props;

    if (isLoading) {
      return 'loading...'
    };

    if (error) {
      return `Error: ${error}`;
    }

    return (
      <>
        <Toolbar onToolbarItemClick={this.handleToolbarItemClick}/>
        <DogForm {...dogData} />
      </>
    );
  }
};

Container.propTypes = {
  dogData: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default Container;